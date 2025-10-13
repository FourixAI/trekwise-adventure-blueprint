import { useMemo } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import { cn } from "@/lib/utils";

type ChatAssistantProps = {
  className?: string;
};

const DEFAULT_SESSION_ENDPOINT = "/api/chatkit/session";

export const ChatAssistant = ({ className }: ChatAssistantProps) => {
  const sessionEndpoint = useMemo(
    () => import.meta.env.VITE_CHATKIT_SESSION_URL ?? DEFAULT_SESSION_ENDPOINT,
    [],
  );

  const { control, status, error } = useChatKit({
    api: {
      async getClientSecret(existing) {
        if (existing) {
          // TODO: implement session refresh if your server supports it.
        }

        const res = await fetch(sessionEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error(`Unable to fetch ChatKit session (${res.status})`);
        }

        const { client_secret: clientSecret } = await res.json();
        return clientSecret;
      },
    },
  });

  if (status === "initializing") {
    return (
      <div
        className={cn(
          "flex h-[520px] w-full max-w-md items-center justify-center rounded-3xl border border-dashed border-primary/40 bg-muted/40 text-muted-foreground",
          className,
        )}
      >
        Connecting to TrekWise guide...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={cn(
          "flex h-[520px] w-full max-w-md items-center justify-center rounded-3xl border border-destructive/60 bg-destructive/10 text-destructive",
          className,
        )}
      >
        Failed to start chat. Please try again shortly.
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-[520px] w-full max-w-lg flex-col overflow-hidden rounded-[28px] border border-border/70 bg-gradient-to-b from-white via-white/95 to-muted/40 shadow-[0_28px_50px_-26px_rgba(15,23,42,0.55)] ring-1 ring-primary/5 backdrop-blur-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%)]" />
      <div className="relative z-10 flex-1">
        <ChatKit control={control} className="h-full w-full" />
      </div>
    </div>
  );
};

export default ChatAssistant;
