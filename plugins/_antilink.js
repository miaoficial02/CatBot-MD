let handler = async (m, { conn, args, command, usedPrefix }) => {
  let chat = db.data.chats[m.chat] || (db.data.chats[m.chat] = {});

  if (!args[0]) {
    return m.reply(`🚫 *Uso correcto del comando:*\n\n📌 ${usedPrefix + command} on\n📌 ${usedPrefix + command} off`);
  }

  if (args[0] === 'on') {
    chat.antilink = true;
    m.reply('✅ *AntiLink activado correctamente.*\nLos mensajes con enlaces de WhatsApp serán eliminados.');
  } else if (args[0] === 'off') {
    chat.antilink = false;
    m.reply('❌ *AntiLink desactivado.*\nYa no se eliminarán enlaces de grupo/canal de WhatsApp.');
  } else {
    m.reply(`❗ Opción inválida. Usa:\n${usedPrefix + command} on\n${usedPrefix + command} off`);
  }
};

handler.help = ['antilink on/off'];
handler.tags = ['grupo'];
handler.command = /^antilink$/i;
handler.admin = true;
handler.group = true;

export default handler;

// 🛡 Middleware AntiLink
export async function before(m, { conn, isAdmin, isBotAdmin, participants }) {
  const chat = db.data.chats[m.chat];
  if (!chat?.antilink) return;

  const regexWaLink = /(?:https?:\/\/)?(?:chat|whatsapp)\.com\/(?:invite\/)?[A-Za-z0-9]+/gi;

  if (!m.isGroup || m.isBaileys || !regexWaLink.test(m.text)) return;

  const sender = m.sender;
  const groupAdmins = participants.filter(p => p.admin).map(p => p.id);
  if (!isBotAdmin) return;

  // Si el que envió es admin, no se hace nada
  if (groupAdmins.includes(sender)) {
    return conn.sendMessage(m.chat, {
      text: `⚠️ *AntiLink activo*\n\n🔒 No se expulsó a @${sender.split('@')[0]} porque es administrador.`,
      mentions: [sender]
    }, { quoted: m });
  }

  try {
    // Elimina el mensaje si es posible
    if (m.key && m.key.id && m.key.remoteJid) {
      await conn.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.key.id,
          participant: m.key.participant || sender
        }
      });
    }

    await conn.groupParticipantsUpdate(m.chat, [sender], 'remove');
    await conn.sendMessage(m.chat, {
      text: `🚫 *AntiLink Detectado*\n\n@${sender.split("@")[0]} fue eliminado por compartir enlaces de WhatsApp no permitidos.`,
      mentions: [sender]
    });
  } catch (e) {
    console.error(e);
  }
}
