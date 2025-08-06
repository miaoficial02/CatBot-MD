const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🐈 𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝘿𝙚 𝗖𝗮𝘁-𝗕𝗼𝘁 🐈

✨ Únete a nuestra comunidad, comparte ideas, reporta errores, o simplemente charla con otros usuarios. ¡Eres bienvenido!

📂 𝙇𝙞𝙨𝙩𝙖 𝘿𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 𝘿𝙤𝙣𝙙𝙚 𝗖𝗮𝘁-𝗕𝗼𝘁

1️⃣  𝙂𝙧𝙪𝙥𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝘿𝙚 𝗖𝗮𝘁-𝗕𝗼𝘁 (𝘾𝙚𝙧𝙤 𝙎𝙪𝙗𝘽𝙤𝙩)  
𝑙𝑖𝑛𝑘: *𝗦𝗜𝗡 𝗚𝗥𝗨𝗣𝗢 𝗔𝗨𝗡*

2️⃣  𝙂𝙧𝙪𝙥𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝙎𝙪𝙗𝘽𝙤𝙩  
𝑙𝑖𝑛𝑘: *𝗦𝗜𝗡 𝗚𝗥𝗨𝗣𝗢 𝗔𝗨𝗡*

3️⃣  𝗖𝗮𝗻𝗮𝗹 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗱𝗲 𝗖𝗮𝘁-𝗕𝗼𝘁 𝘆 𝘁𝗲𝘀𝘁. 
𝑙𝑖𝑛𝑘: *𝗦𝗜𝗡 𝗖𝗔𝗡𝗔𝗟 𝗔𝗨𝗡*

⚠️ Respeta las normas de cada grupo.

─
📌 Usa *.menu* para ver todos los comandos.
`

  await conn.sendMessage(m.chat, {
    text: texto.trim(),
    contextInfo: {
      externalAdReply: {
        title: "𝐶𝑎𝑡-𝐵𝑜𝑡",
        body: "*Únete a nuestros grupos oficiales*",
        thumbnailUrl: 'https://files.catbox.moe/j6ci3o.jpg', // Puedes cambiar la imagen
        sourceUrl: "https://github.com/miaoficial02/0CatBot-MD",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^grupos$/i

export default handler
