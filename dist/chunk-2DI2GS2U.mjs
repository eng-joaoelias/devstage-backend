// src/env.ts
import { z } from "zod";
var envSchema = z.object({
  // Server
  PORT: z.coerce.number().default(3333),
  // Database
  DATABASE_URL: z.string(),
  // Redis
  REDIS_URL: z.string().url(),
  // URLs
  API_URL: z.string().url(),
  WEB_URL: z.string().url()
});
var env = envSchema.parse(process.env);

export {
  env
};
