import {
  db
} from "./chunk-6BDQUV3S.mjs";
import {
  schema
} from "./chunk-6CY65NZT.mjs";
import {
  redis
} from "./chunk-KUYBWSOM.mjs";

// src/functions/subscribe-to-event.ts
import { eq } from "drizzle-orm";
async function subscribeToEvent({
  name,
  email,
  invitedBySubscriberId
}) {
  const results = await db.select().from(schema.subscriptions).where(eq(schema.subscriptions.email, email));
  if (results.length > 0) {
    return { subscriberId: results[0].id };
  }
  const [{ subscriberId }] = await db.insert(schema.subscriptions).values({
    name,
    email
  }).returning({
    subscriberId: schema.subscriptions.id
  });
  if (invitedBySubscriberId) {
    await redis.zincrby("referral:ranking", 1, invitedBySubscriberId);
  }
  return { subscriberId };
}

export {
  subscribeToEvent
};
