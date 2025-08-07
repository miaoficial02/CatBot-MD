let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
  if (!isOwner) return m.reply('❌ Solo el owner puede usar este comando.')
  if (!args[0]) return m.reply(`❌ Ingresa el nuevo nombre.\n\n📌 Ejemplo:\n*${usedPrefix + command} CatBot*`)

  try {
    await conn.updateProfileName(args.join(' '))
    m.reply(`✅ Nombre del bot cambiado a: *${args.join(' ')}*`)
  } catch (e) {
    console.error(e)
    m.reply('❌ Error al cambiar el nombre del bot.')
  }
}

handler.command = ['botname']
handler.owner = true
handler.tags = ['owner']
handler.help = ['botname <nuevo nombre>']

export default handler
