const helloRoute = async (request, reply) => {
    return { hello: 'world' }
}

module.exports = {
    helloRoute
}