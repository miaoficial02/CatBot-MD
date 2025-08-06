let consejos = [
  '💘 Ama sin miedo, pero no sin límites.',
  '💌 No busques a alguien perfecto, busca a quien te valore.',
  '💕 Las pequeñas acciones valen más que mil palabras.',
  '💭 A veces, el silencio también es amor.',
  '🫂 El amor sano no duele, sana.',
  '❤️ No te conformes con menos de lo que mereces.',
  '💑 La confianza es el pilar más fuerte del amor.',
  '🌹 Si te hace feliz, no es una pérdida de tiempo.'
];

let handler = async (m) => {
  let consejo = consejos[Math.floor(Math.random() * consejos.length)];
  m.reply(`✨ Consejo de amor:\n${consejo}`);
};

handler.help = ['consejoamor'];
handler.tags = ['fun'];
handler.command = /^consejoamor$/i;

export default handler;
