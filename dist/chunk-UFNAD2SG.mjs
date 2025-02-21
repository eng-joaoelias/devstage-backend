import {
  redis
} from "./chunk-KUYBWSOM.mjs";

// src/functions/get-subscriber-invites-count.ts
async function getSubscriberInvitesCount({
  subscriberId
}) {
  const invites = await redis.zscore("referral:ranking", subscriberId);
  return { count: invites ? Number.parseInt(invites) : 0 };
}

export {
  getSubscriberInvitesCount
};
