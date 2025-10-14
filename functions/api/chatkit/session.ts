import type { PagesFunction } from "@cloudflare/workers-types";

type Env = {
  OPENAI_API_KEY: string;
  WORKFLOW_ID: string;
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (request.method !== "POST") {
    return new Response("Only POST supported.", {
      status: 405,
      headers: { ...CORS_HEADERS, Allow: "POST" },
    });
  }

  const { OPENAI_API_KEY, WORKFLOW_ID } = env;
  if (!OPENAI_API_KEY || !WORKFLOW_ID) {
    return new Response("Missing OPENAI_API_KEY or WORKFLOW_ID.", {
      status: 500,
      headers: CORS_HEADERS,
    });
  }

  const upstream = await fetch("https://api.openai.com/v1/chatkit/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
      "OpenAI-Beta": "chatkit_beta=v1",
    },
    body: JSON.stringify({
      workflow: { id: WORKFLOW_ID },
      user: crypto.randomUUID(),
    }),
  });

  const bodyText = await upstream.text();

  return new Response(bodyText, {
    status: upstream.status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
};
