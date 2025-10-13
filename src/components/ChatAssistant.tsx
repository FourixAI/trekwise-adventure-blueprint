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

  const { control } = useChatKit({
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
          "flex h-[600px] w-full max-w-md items-center justify-center rounded-lg border border-dashed border-primary/50 bg-muted/40 text-muted-foreground",
          className,
        )}
      >
        Connecting to TrekWise guide...
      </div>
    );
  }

  return (
    <div className="relative pb-8 flex h-[90vh] w-full rounded-2xl flex-col overflow-hidden bg-white shadow-sm transition-colors dark:bg-slate-900">
      <ChatKit
        control={control}
        className={className ?? "h-[600px] w-full max-w-md"}
      />
    </div>
  );
};

export default ChatAssistant;
