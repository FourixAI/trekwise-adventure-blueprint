import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatAssistant from "@/components/ChatAssistant";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ChatAssistantLauncher = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-3 z-50 flex flex-col items-end space-y-3 sm:bottom-6 sm:right-6">
      {open && (
        <Card
          id="trekwise-chat-assistant"
          className="w-[calc(100vw-3rem)] max-w-md border-border shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-primary/80">TrekWise Guide</p>
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
          <CardContent className="p-0">
            <ChatAssistant className="h-[420px] w-full" />
          </CardContent>
        </Card>
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
