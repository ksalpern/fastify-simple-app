import fastify from "fastify";

const server = fastify();

server.get("/", async () => {
  return { hello: "world" };
});

server.listen({ port: 3000 });
