import fs from 'fs'
import path from 'path'

const pluginsDir = __dirname  // como el archivo está dentro de plugins/

const pluginFiles = fs.readdirSync(pluginsDir)
  .filter(file => file.endsWith('.js') && file !== path.basename(__filename))

pluginFiles.forEach(async (file) => {
  const pluginPath = path.join(pluginsDir, file)
  try {
    await import(pluginPath)
    console.log(`✔ Plugin cargado: ${file}`)
  } catch (err) {
    console.error(`✘ Error en plugin ${file}:\n`, err)
  }
})
