import fastify from "fastify";
import AutoLoad from "@fastify/autoload";

const server = fastify();

server.register(AutoLoad, {
    dir: `${__dirname}/routes`,
})

server.listen({ port: 3000 })