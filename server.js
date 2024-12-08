import fastify from "fastify";
const server = fastify({ logger: true });
const PORT = 5000;

server.get("/", async (req, res) => {
    return { hello: "world" };
});

const start = async () => {
    try {
        await server.listen({port: PORT});
    } catch (error) {
        console.error(error);
        process.exit(1);        
    }
}

start();