let handler = async (m, { conn, text, isOwner }) => {
  if (!isOwner) throw '🚫 Este comando es solo para el Owner.';
  if (!text) throw '📌 Ingresa un mensaje para enviar a todos los chats.';
  let chats = Object.keys(conn.chats);
  for (let id of chats) {
    await conn.sendMessage(id, { text: `📢 Broadcast:\n\n${text}` });
  }
  m.reply(`✅ Mensaje enviado a ${chats.length} chats.`);
};

handler.command = ['broadcast', 'bc'];
handler.rowner = true;
handler.tags = ['owner'];
handler.help = ['broadcast <mensaje>'];
export default handler;
