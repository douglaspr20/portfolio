import { defineMiddleware } from "astro:middleware";
export const onRequest = defineMiddleware(async (ctx, next) => {
  const currentLocale = ctx.currentLocale ?? "en";

  if (ctx.url.pathname === "/") {
    console.log("Redirecting to the localized homepage...");
    return new Response(null, {
      status: 302,
      headers: {
        Location: `/${currentLocale}/`,
      },
    });
  }

  return next();
});
