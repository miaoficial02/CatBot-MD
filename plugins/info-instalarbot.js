const textoInstalacion = `
┏━━━━━━━━━━━━━━━━━━━┓
┃   🐈 *INSTALAR CATBOT* 🐈
┗━━━━━━━━━━━━━━━━━━━┛

📦 *Requisitos previos:*
◦ Termux actualizado
◦ Almacenamiento habilitado

📲 *Pasos para instalar:*

1️⃣ Dar permisos al almacenamiento:
> termux-setup-storage

2️⃣ Actualizar e instalar dependencias:
> apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn

3️⃣ Clonar el repositorio:
> git clone https://github.com/miaoficial02/CatBot-MD && cd CatBot-MD

4️⃣ Instalar los paquetes:
> yarn install  
> npm install  
> npm update

5️⃣ Iniciar el bot:
> npm start

🔧 Si es la primera vez, utiliza el Código de 8 dígitos para conectar el bot.

📌 *Soporte:* si algo falla, contacta a @Its.chinitaaa_ o revisa el README del repo.

💡 Usa *#menu* para ver todos los comandos del bot una vez que esté en línea.

⚠️  *Puedes agregar tu número como owner pero no elimines el número de los demás owners.* 

💗 cuando ya este instalado avísale a la owner, ocupa el comando #owner o #creador y avisale.
`;

let handler = async (m) => {
  await m.reply(textoInstalacion);
};

handler.command = ['instalarbot'];
handler.tags = ['info'];
handler.help = ['instalarbot'];

export default handler;
