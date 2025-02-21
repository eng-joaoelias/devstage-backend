import {
  env
} from "./chunk-2DI2GS2U.mjs";

// src/redis/client.ts
import { Redis } from "ioredis";
var redis = new Redis(env.REDIS_URL);

export {
  redis
};
