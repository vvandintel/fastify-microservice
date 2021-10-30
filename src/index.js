require('dotenv').config()
const fastify = require('fastify')({ logger: true })
const routes = require('./routes')
require('./util').startTracing()

// Declare a route
fastify.get('/', routes.helloRoute)

// Run the server!
const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 5000, process.env.host || '0.0.0.0')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()