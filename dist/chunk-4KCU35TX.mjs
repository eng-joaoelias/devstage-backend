import {
  redis
} from "./chunk-KUYBWSOM.mjs";

// src/functions/get-subscriber-invites-clicks.ts
async function getSubscriberInvitesClicks({
  subscriberId
}) {
  const accessCount = await redis.hget("referral:access-count", subscriberId);
  return { count: accessCount ? Number.parseInt(accessCount) : 0 };
}

export {
  getSubscriberInvitesClicks
};
