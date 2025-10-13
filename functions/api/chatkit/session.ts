import type { PagesFunction } from "@cloudflare/workers-types";

interface Env {
  OPENAI_API_KEY: string;
  WORKFLOW_ID: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  const method = request.method.toUpperCase();
  console.log("ChatKit session handler:", method);

  if (method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { ...corsHeaders, Allow: "POST" },
    });
  }

  if (!env.OPENAI_API_KEY || !env.WORKFLOW_ID) {
    return new Response("Server missing OpenAI configuration.", {
      status: 500,
      headers: corsHeaders,
    });
  }

  const openaiRes = await fetch("https://api.openai.com/v1/chatkit/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
      "OpenAI-Beta": "chatkit_beta=v1",
    },
    body: JSON.stringify({
      workflow: { id: env.WORKFLOW_ID },
      user: crypto.randomUUID(),
    }),
  });

  if (!openaiRes.ok) {
    const errorText = await openaiRes.text();
    console.error("OpenAI session error:", openaiRes.status, errorText);
    return new Response(errorText, {
      status: openaiRes.status,
      headers: corsHeaders,
    });
  }

  const { client_secret } = await openaiRes.json<{ client_secret: string }>();

  return new Response(JSON.stringify({ client_secret }), {
    status: 200,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
};
