export async function before(m) {
  if (!m.text || !global.prefix.test(m.text)) return;

  const usedPrefix = global.prefix.exec(m.text)[0];
  const command = m.text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase();

  if (!command || command === 'bot') return;

  const isValidCommand = (cmd, plugins) => {
    return Object.values(plugins).some(plugin =>
      plugin.command &&
      (Array.isArray(plugin.command) ? plugin.command : [plugin.command]).includes(cmd)
    );
  };

  if (!isValidCommand(command, global.plugins)) {
    const comando = m.text.trim().split(' ')[0];
    await m.reply('╭━━⊱ ❌ 𝗘𝗦𝗧𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗡𝗢 𝗘𝗫𝗜𝗦𝗧𝗘 ❌ ⊱━━╮\n┃ 💬 𝗛𝗼𝗹𝗮 𝗲𝗹 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 *${comando}* 𝗻𝗼 𝗲𝘅𝗶𝘀𝘁𝗲\n┃ 📌 𝗨𝘀𝗮: *#help*\n┃ 🧾 𝗣𝗮𝗿𝗮 𝘃𝗲𝗿 𝗹𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲𝘀\n╰━━━━━━━━━━━━━━━━━╯`);

      `✦ El comando *${comando}* no existe.\nUsa *#help* para ver la lista de comandos disponibles.`);
  }
}
