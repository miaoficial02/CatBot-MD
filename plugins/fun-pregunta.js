let handler = async (m) => {
  const respuestas = [
    "✨ Sí.",
    "💭 No.",
    "🔮 Tal vez...",
    "🧠 Pregunta de nuevo más tarde.",
    "😼 Claro que sí.",
    "🚫 Ni lo sueñes.",
    "🤔 Puede ser."
  ]
  let res = respuestas[Math.floor(Math.random() * respuestas.length)]
  await m.reply(`🎱 ${res}`)
}
handler.command = ['pregunta']
handler.tags = ['fun']
handler.help = ['pregunta']
export default handler
