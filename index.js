const hapi = require('hapi')

const host = 'localhost'
const port = 3333

const server = hapi.server({
    host: host,
    port: port
})

const init = async () => {
  await server.start();
  console.log(`Server running at: ${port}`)
}

require('./routes/routes')(server)

init()