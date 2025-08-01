import os from 'os';

let handler = async (m, { conn }) => {
    try {
        const start = Date.now();

        const info = `
𝙍𝙀𝙄𝙉𝙄𝘾𝙄𝙊 𝘿𝙀 𝙇𝘼 𝘽𝙊𝙏...
        `.trim();

        await conn.reply(m.chat, info, m);

        setTimeout(() => process.exit(0), 3000);

    } catch (error) {
        console.error('[ERROR][REINICIO]', error);
        await conn.reply(m.chat, `❌ Error al intentar reiniciar:\n${error.message || error}`, m);
    }
};

handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;

export default handler;