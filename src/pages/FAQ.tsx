import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      category: "Booking & Payments",
      questions: [
        {
          q: "How do I book a trip?",
          a: "You can book by contacting us through our contact form, email, or phone. We'll send you a booking form and invoice. A 30% deposit secures your spot, with the balance due 60 days before departure.",
        },
        {
          q: "What's your cancellation policy?",
          a: "Cancellations 90+ days before departure: full refund minus $200 admin fee. 60-89 days: 50% refund. 30-59 days: 25% refund. Less than 30 days: no refund. We strongly recommend travel insurance to protect your investment.",
        },
        {
          q: "Is travel insurance required?",
          a: "Yes, comprehensive travel insurance is mandatory for all trips. Your policy must cover medical evacuation, trip cancellation, and adventure activities at altitude. We can recommend reputable providers.",
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes! After your deposit, you can split the remaining balance into monthly installments. Contact us to arrange a payment schedule that works for you.",
        },
      ],
    },
    {
      category: "Trip Preparation",
      questions: [
        {
          q: "What fitness level do I need?",
          a: "It varies by trip. Our difficulty ratings: Moderate requires regular exercise and ability to hike 4-5 hours daily. Challenging requires good fitness, prior hiking experience, and comfort with 6-8 hour days. We provide detailed preparation guides after booking.",
        },
        {
          q: "What should I pack?",
          a: "We send a comprehensive packing list after booking. Essential items include: quality hiking boots (broken in!), layered clothing, rain gear, sleeping bag (for camping trips), daypack, water bottles, and personal medications. Technical gear like tents is provided.",
        },
        {
          q: "Do I need special vaccinations?",
          a: "Depends on destination. Nepal requires no vaccinations but hepatitis A/B and typhoid are recommended. Patagonia and Tasmania have no requirements. We recommend consulting a travel medicine specialist 6-8 weeks before departure.",
        },
        {
          q: "Can I charge devices on the trail?",
          a: "Limited charging available. Some teahouses in Nepal have charging stations ($2-5). On camping trips, bring portable battery packs. We carry solar chargers for emergencies only.",
        },
      ],
    },
    {
      category: "On The Trail",
      questions: [
        {
          q: "What's the food like?",
          a: "Varied and delicious! We accommodate dietary restrictions (notify us at booking). Nepal: dal bhat, noodles, momos. Patagonia: Argentine beef, empanadas, fresh vegetables. Tasmania: fresh seafood, local produce. All meals included during trekking.",
        },
        {
          q: "What about altitude sickness?",
          a: "Only relevant for Nepal trip (max altitude 4,130m). We build in acclimatization days and follow proven ascent protocols. Guides are trained in altitude illness recognition. We carry emergency oxygen and evacuation arrangements are in place.",
        },
        {
          q: "How much should I tip guides?",
          a: "Tipping is customary but not mandatory. Suggested amounts: Nepal $200-250/person, Patagonia $150-200/person, Tasmania $100-150/person. Tips can be shared among the team or given individually.",
        },
        {
          q: "What if I can't keep up with the group?",
          a: "We travel at the pace of the group, taking regular breaks. If you're struggling, guides can adjust pace or arrange shorter routes. Your safety and enjoyment are priorities—there's no shame in modifying plans.",
        },
      ],
    },
    {
      category: "Logistics",
      questions: [
        {
          q: "Do I need a visa?",
          a: "Nepal: Yes, $50 visa on arrival (30 days). Bring passport photos and cash. Patagonia (Argentina/Chile): Most nationalities need no visa for tourism. Tasmania (Australia): Electronic visa required for most nationalities—apply online.",
        },
        {
          q: "What about solo travelers?",
          a: "Solo travelers are welcome! About 40% of our trekkers travel solo and form lasting friendships. Single room supplement available for hotel nights ($200-400 depending on trip). Shared tent accommodation on camping portions.",
        },
        {
          q: "What if weather delays or cancels activities?",
          a: "Mountain weather is unpredictable. We build flexibility into itineraries. If weather prevents planned activities, we arrange alternatives or rest days. Refunds aren't provided for weather delays as these are beyond our control.",
        },
        {
          q: "How do I get to the trip start point?",
          a: "Trip price doesn't include international flights. We provide detailed arrival instructions after booking. Airport pickup is included. We recommend arriving 1-2 days early to adjust to time zones and prevent missed departures.",
        },
      ],
    },
    {
      category: "Group & Private Trips",
      questions: [
        {
          q: "Can I book a private trip?",
          a: "Absolutely! Private trips available for groups of 4+. Advantages: custom dates, flexible itinerary, your own pace. Cost is typically 30-40% higher than group trips. Contact us for custom quotes.",
        },
        {
          q: "What's the age range of travelers?",
          a: "Most trekkers are 30-65 years old, but we welcome all ages 18+. What matters more than age is fitness and adventurous spirit. We've had 70-year-olds outpace 30-year-olds!",
        },
        {
          q: "Do you run trips for families?",
          a: "Not currently, as our standard trips are designed for adults. However, we can arrange custom family expeditions for children 14+ who meet fitness requirements. Contact us to discuss.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl opacity-95">
            Everything you need to know about trekking with TrekWise
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {category.questions.map((faq, questionIndex) => (
                  <AccordionItem
                    key={questionIndex}
                    value={`${categoryIndex}-${questionIndex}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold text-foreground">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're here to help! Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button variant="outline" size="lg">
                Call: (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Pro Tips from Our Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-lg mb-2">Start Training Early</h3>
              <p className="opacity-95">
                Begin cardiovascular training 2-3 months before your trip. Include hills and stairs in your routine.
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-lg mb-2">Break In Your Boots</h3>
              <p className="opacity-95">
                Wear your hiking boots on at least 3-4 practice hikes before departure. Blisters ruin adventures!
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-lg mb-2">Pack Light</h3>
              <p className="opacity-95">
                Less is more. If you haven't used something on 3 trips, leave it home. Your back will thank you.
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-lg mb-2">Stay Hydrated</h3>
              <p className="opacity-95">
                Dehydration is the #1 cause of fatigue on trail. Drink before you're thirsty. 3-4 liters per day minimum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
