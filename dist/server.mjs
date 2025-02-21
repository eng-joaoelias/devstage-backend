import {
  accessInviteLinkRoute
} from "./chunk-NHXWK57M.mjs";
import {
  getRankingRoute
} from "./chunk-YWMPM2LO.mjs";
import {
  getSubscriberInvitesClicksRoute
} from "./chunk-URPEKORW.mjs";
import {
  getSubscriberInvitesCountRoute
} from "./chunk-SQRWJ6IJ.mjs";
import {
  getSubscriberRankingPositionRoute
} from "./chunk-JI3Q7ARE.mjs";
import {
  subscribeToEventRoute
} from "./chunk-76FPMN6Q.mjs";
import "./chunk-WSDXOKEU.mjs";
import "./chunk-MESR6AQX.mjs";
import "./chunk-XTHJWK75.mjs";
import "./chunk-6BDQUV3S.mjs";
import "./chunk-6CY65NZT.mjs";
import "./chunk-3WGIY7JX.mjs";
import "./chunk-4KCU35TX.mjs";
import "./chunk-UFNAD2SG.mjs";
import "./chunk-ZBKCDGBC.mjs";
import "./chunk-KUYBWSOM.mjs";
import {
  env
} from "./chunk-2DI2GS2U.mjs";

// src/server.ts
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
var app = fastify();
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifyCors);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "NLW Connect",
      version: "0.1"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getRankingRoute);
app.register(getSubscriberInvitesCountRoute);
app.register(getSubscriberInvitesClicksRoute);
app.register(getSubscriberRankingPositionRoute);
app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server running!");
});
