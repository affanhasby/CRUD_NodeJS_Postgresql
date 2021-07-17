const app = require('./app')
const http = require('http')
const logger = require('./utils/logger')
require('dotenv').config()

const port = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(port, () => logger.info(`Running in port 3000, please access to http://localhost:3000/`))