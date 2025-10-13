import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trip: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast.success("Message sent! We'll respond within 24 hours.");
    setFormData({ name: "", email: "", phone: "", trip: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl opacity-95">
            Ready to start planning your adventure? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-[var(--adventure-shadow)]">
                <CardContent className="pt-6">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="trip" className="text-foreground">
                          Interested In
                        </Label>
                        <Select
                          value={formData.trip}
                          onValueChange={(value) =>
                            setFormData({ ...formData, trip: value })
                          }
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a trip" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="patagonia">Patagonia Explorer</SelectItem>
                            <SelectItem value="nepal">Nepal High Rim</SelectItem>
                            <SelectItem value="tasmania">Tasmanian Wilderness Trek</SelectItem>
                            <SelectItem value="custom">Custom Private Trip</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your adventure goals, experience level, preferred dates, or any questions you have..."
                        className="mt-2 min-h-[150px]"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 24 hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-6 text-foreground">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a
                          href="tel:+15551234567"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a
                          href="mailto:hello@trekwise.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hello@trekwise.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Office</p>
                        <p className="text-muted-foreground">
                          1234 Mountain View Road
                          <br />
                          Boulder, CO 80302
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Office Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9am - 6pm MT
                          <br />
                          Saturday: 10am - 4pm MT
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">Prefer to Talk?</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a free 30-minute consultation call to discuss your adventure goals.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3">Emergency Contact</h3>
                  <p className="opacity-95 mb-2">
                    For travelers currently on expedition:
                  </p>
                  <p className="font-semibold text-lg">
                    24/7 Emergency Line:
                    <br />
                    +1 (555) 999-0000
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Have a Quick Question?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Check our FAQ page—you might find the answer right away
          </p>
          <a href="/faq">
            <Button variant="outline" size="lg">
              View FAQ
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
