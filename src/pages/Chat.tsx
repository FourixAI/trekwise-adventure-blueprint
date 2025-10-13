import ChatAssistant from "@/components/ChatAssistant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Chat = () => (
  <main className="min-h-screen bg-muted/40 py-16">
    <div className="container mx-auto max-w-5xl px-4">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-foreground">Adventure Concierge</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Chat with TrekWise&apos;s AI guide for itinerary ideas, packing lists, and sustainability tips.
        </p>
      </div>

      <Card className="mx-auto max-w-3xl border-border shadow-lg">
        <CardHeader className="text-left">
          <CardTitle className="text-2xl text-foreground">
            Ask the TrekWise Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <ChatAssistant />
        </CardContent>
      </Card>
    </div>
  </main>
);

export default Chat;
