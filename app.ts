import Fastify from "fastify";
import AutoLoad from "@fastify/autoload";
import Swagger from "@fastify/swagger";
import SwaggerUI from "@fastify/swagger-ui";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { createContext } from "./context/context";
import { exampleRouter } from "./routes/router";
import { router } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = router({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export function build() {
  const server = Fastify();

  server.register(Swagger);
  server.register(SwaggerUI);

  server.register(AutoLoad, {
    dir: `${__dirname}/routes`,
  });

  server.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext },
  });

  return server;
}
