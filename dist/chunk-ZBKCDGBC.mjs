import {
  redis
} from "./chunk-KUYBWSOM.mjs";

// src/functions/get-subscriber-ranking-position.ts
async function getSubscriberRankingPosition({
  subscriberId
}) {
  const rank = await redis.zrevrank("referral:ranking", subscriberId);
  if (rank === null) {
    return { position: null };
  }
  const position = rank + 1;
  return { position };
}

export {
  getSubscriberRankingPosition
};
