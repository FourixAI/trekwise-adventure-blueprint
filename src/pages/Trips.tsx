import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, TrendingUp } from "lucide-react";
import patagoniaImage from "@/assets/patagonia.jpg";
import nepalImage from "@/assets/nepal.jpg";
import tasmaniaImage from "@/assets/tasmania.jpg";

const Trips = () => {
  const trips = [
    {
      id: "patagonia",
      name: "Patagonia Explorer",
      location: "Argentina & Chile",
      duration: "10 days / 9 nights",
      difficulty: "Challenging",
      groupSize: "8-12 people",
      image: patagoniaImage,
      price: "$3,450",
      dates: ["March 15-24, 2025", "April 5-14, 2025", "October 10-19, 2025"],
      highlights: [
        "Trek to the base of Torres del Paine",
        "Kayak on glacial lakes",
        "Camp under Patagonian stars",
        "Visit Perito Moreno Glacier",
      ],
      description:
        "Experience the raw beauty of Patagonia's most iconic landscapes. This expedition takes you through granite peaks, turquoise lakes, and ancient glaciers.",
    },
    {
      id: "nepal",
      name: "Nepal High Rim",
      location: "Annapurna Region, Nepal",
      duration: "14 days / 13 nights",
      difficulty: "Moderate to Challenging",
      groupSize: "6-10 people",
      image: nepalImage,
      price: "$2,890",
      dates: ["March 20 - April 2, 2025", "October 5-18, 2025", "November 3-16, 2025"],
      highlights: [
        "Trek through Himalayan villages",
        "Experience local Sherpa culture",
        "Sunrise at Poon Hill (3,210m)",
        "Visit ancient Buddhist monasteries",
      ],
      description:
        "Journey through the heart of the Himalayas with experienced Sherpa guides. Immerse yourself in mountain culture while trekking past some of Earth's highest peaks.",
    },
    {
      id: "tasmania",
      name: "Tasmanian Wilderness Trek",
      location: "Tasmania, Australia",
      duration: "7 days / 6 nights",
      difficulty: "Moderate",
      groupSize: "8-12 people",
      image: tasmaniaImage,
      price: "$2,150",
      dates: ["February 12-18, 2025", "March 8-14, 2025", "April 15-21, 2025"],
      highlights: [
        "Explore ancient rainforests",
        "Coastal cliff hiking",
        "Spot unique wildlife",
        "Pristine wilderness camping",
      ],
      description:
        "Discover Tasmania's untouched wilderness areas. From moss-covered forests to dramatic coastal cliffs, this trek showcases Australia's most pristine natural environment.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Adventures</h1>
          <p className="text-xl opacity-95">
            Carefully curated expeditions to the world's most spectacular wilderness areas
          </p>
        </div>
      </section>

      {/* Trips Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {trips.map((trip, index) => (
              <Card
                key={trip.id}
                className="overflow-hidden border-border hover:shadow-[var(--adventure-shadow)] transition-all duration-300"
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`relative h-80 md:h-auto ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <img
                      src={trip.image}
                      alt={trip.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                      {trip.price}
                    </div>
                  </div>
                  <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h2 className="text-3xl font-bold mb-2 text-foreground">{trip.name}</h2>
                    <p className="text-muted-foreground mb-6">{trip.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-sm text-foreground">Location</p>
                          <p className="text-sm text-muted-foreground">{trip.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-sm text-foreground">Duration</p>
                          <p className="text-sm text-muted-foreground">{trip.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-sm text-foreground">Group Size</p>
                          <p className="text-sm text-muted-foreground">{trip.groupSize}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-sm text-foreground">Difficulty</p>
                          <p className="text-sm text-muted-foreground">{trip.difficulty}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-2 text-foreground">Highlights:</h3>
                      <ul className="space-y-1">
                        {trip.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={`/trip/${trip.id}`}>
                      <Button variant="hero" className="w-full md:w-auto">
                        View Full Details
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We also offer custom private expeditions tailored to your group's interests
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Design a Custom Trip
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Trips;
