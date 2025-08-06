import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pluginsDir = __dirname

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
