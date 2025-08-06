import fs from 'fs'
import path from 'path'

async function testPluginsLoad() {
  const pluginsDir = path.resolve('./plugins') // Ajusta si tu carpeta es otra
  const files = fs.readdirSync(pluginsDir).filter(f => f.endsWith('.js'))

  for (const file of files) {
    try {
      console.log(`Cargando plugin: ${file}`)
      // Import dinámico para detectar errores
      await import(path.join(pluginsDir, file) + `?update=${Date.now()}`)
      console.log(`✔️ Plugin cargado correctamente: ${file}`)
    } catch (e) {
      console.error(`❌ Error cargando plugin ${file}:\n`, e)
    }
  }
}

testPluginsLoad()
