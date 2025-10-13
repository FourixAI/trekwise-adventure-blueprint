import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatAssistant from "@/components/ChatAssistant";
import { Button } from "@/components/ui/button";

const ChatAssistantLauncher = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-3 z-50 flex flex-col items-end space-y-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          id="trekwise-chat-assistant"
          className="w-[calc(100vw-3rem)] max-w-lg overflow-hidden rounded-[32px] border border-border/60 bg-background/95 shadow-[0_28px_55px_-30px_rgba(15,23,42,0.6)] backdrop-blur"
        >
          <div className="flex items-center justify-between border-b border-border/60 bg-gradient-to-r from-primary/10 via-background to-background px-5 py-4 dark:from-primary/20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/80">
                TrekWise Guide
              </p>
              <h2 className="text-lg font-semibold text-foreground">Need planning help?</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close TrekWise guide"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="px-3 pb-4 pt-3 sm:px-4">
            <ChatAssistant className="h-[65vh] border-none bg-transparent shadow-none sm:h-[520px]" />
          </div>
        </div>
      )}

      <Button
        size="lg"
        className="w-[calc(100vw-3rem)] shadow-xl sm:w-auto"
        variant="hero"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="trekwise-chat-assistant"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        {open ? "Hide Assistant" : "Ask TrekWise"}
      </Button>
    </div>
  );
};

export default ChatAssistantLauncher;
