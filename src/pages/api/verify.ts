export const prerender = false;

import type { APIRoute } from "astro";
import type { APIContext } from "astro";

const turnstileURL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export const POST: APIRoute = async ({ request }: APIContext) => {
  const data = await request.json();

  const { token } = data;

  if (!token) {
    return new Response(
      JSON.stringify({
        status: "401 Unauthorized",
        message: "Please include TURNSTILE_SECRET_TOKEN in your .env file.",
      }),
      { status: 401 },
    );
  }

  const formData = new FormData();
  formData.append("secret", import.meta.env.PUBLIC_TURNSTILE_SECRET_KEY);
  formData.append("response", token);

  const result = await fetch(turnstileURL, {
    body: formData,
    method: "POST",
  });

  const outcome = await result.json();

  if (!outcome.success) {
    return new Response(
      JSON.stringify({
        status: "500 Internal Server Error",
        message:
          "An error occurred while verifying you with Turnstile. Are you a human?",
      }),
      { status: 500 },
    );
  }

  return new Response(
    JSON.stringify({
      message: "Success.",
    }),
  );
};
