let handler = async (m, { conn, text, isOwner }) => {
  if (!isOwner) throw '🚫 Este comando es solo para el Owner.';
  if (!text || !text.includes('@g.us')) throw '📌 Ingresa el ID de grupo completo. Ej: #salirgrupo 1234567890-123456@g.us';
  await conn.groupLeave(text.trim());
  m.reply('✅ Salí del grupo correctamente.');
};

handler.command = ['salirgrupo', 'leavegc'];
handler.rowner = true;
handler.tags = ['owner'];
handler.help = ['salirgrupo <idgrupo>'];
export default handler;
