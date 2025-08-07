let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
  if (!isOwner) return m.reply('❌ Solo el owner puede usar este comando.')
  if (!args[0]) return m.reply(`❌ Ingresa una nueva biografía.\n\n📌 Ejemplo:\n*${usedPrefix + command} Soy un bot gatito.*`)

  try {
    await conn.updateProfileStatus(args.join(' '))
    m.reply('✅ Biografía actualizada con éxito.')
  } catch (e) {
    console.error(e)
    m.reply('❌ Error al cambiar la biografía.')
  }
}

handler.command = ['setbio']
handler.owner = true
handler.tags = ['owner']
handler.help = ['setbio <nueva biografía>']

export default handler
