import {
  schema
} from "./chunk-6CY65NZT.mjs";
import {
  env
} from "./chunk-2DI2GS2U.mjs";

// src/drizzle/client.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
var pg = postgres(env.DATABASE_URL);
var db = drizzle(pg, { schema });

export {
  pg,
  db
};
