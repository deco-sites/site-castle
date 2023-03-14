import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 603,
  site: "site-castle",
  domains: ["site-castle.deco.site"],
});