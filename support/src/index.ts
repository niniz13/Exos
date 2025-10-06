import 'dotenv/config'
import { createApp } from './app.js'
import { config } from './config.js'

const app = createApp()

app.listen(config.port, () => {
  console.log(`API listening on http://localhost:${config.port}`)
  console.log(`Allowed origin: ${config.clientOrigin}`)
})
