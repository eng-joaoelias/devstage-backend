import {
  accessInviteLink
} from "./chunk-MESR6AQX.mjs";
import {
  env
} from "./chunk-2DI2GS2U.mjs";

// src/routes/access-invite-link-route.ts
import { z } from "zod";
var accessInviteLinkRoute = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Access invite link",
        operationId: "accessInviteLink",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          301: z.null()
        }
      }
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      await accessInviteLink({ subscriberId });
      const redirectUrl = new URL(env.WEB_URL);
      redirectUrl.searchParams.set("referrer", subscriberId);
      return reply.redirect(redirectUrl.toString(), 302);
    }
  );
};

export {
  accessInviteLinkRoute
};
