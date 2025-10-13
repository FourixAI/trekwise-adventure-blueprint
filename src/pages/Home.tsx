import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Compass, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";
import patagoniaImage from "@/assets/patagonia.jpg";
import nepalImage from "@/assets/nepal.jpg";
import tasmaniaImage from "@/assets/tasmania.jpg";

const Home = () => {
  const trips = [
    {
      id: "patagonia",
      name: "Patagonia Explorer",
      duration: "10 days",
      image: patagoniaImage,
      description: "Trek through dramatic granite peaks and turquoise glacial lakes",
      price: "$3,450",
    },
    {
      id: "nepal",
      name: "Nepal High Rim",
      duration: "14 days",
      image: nepalImage,
      description: "Experience the majesty of the Himalayas with local Sherpa guides",
      price: "$2,890",
    },
    {
      id: "tasmania",
      name: "Tasmanian Wilderness Trek",
      duration: "7 days",
      image: tasmaniaImage,
      description: "Explore ancient rainforests and pristine coastal wilderness",
      price: "$2,150",
    },
  ];

  const values = [
    {
      icon: Mountain,
      title: "Authentic Adventures",
      description: "Unbeaten trails and genuine wilderness experiences",
    },
    {
      icon: Compass,
      title: "Expert Guidance",
      description: "Local guides who know every trail and story",
    },
    {
      icon: Heart,
      title: "Sustainable Travel",
      description: "Low-impact tourism that benefits local communities",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Intimate group sizes for personalized experiences",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Explore the Unbeaten Trails
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md max-w-2xl mx-auto">
            Join us on eco-conscious adventures to the world's most spectacular hiking destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/trips">
              <Button variant="hero" size="lg">
                View Our Trips
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Inquire Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Why Trek with Us</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're more than a travel company—we're your partners in meaningful exploration
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-[var(--adventure-shadow)] transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Featured Adventures</h2>
          <p className="text-center text-muted-foreground mb-12">
            Handpicked journeys to extraordinary destinations
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <Link key={trip.id} to={`/trip/${trip.id}`}>
                <Card className="overflow-hidden border-border hover:shadow-[var(--adventure-shadow)] transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="relative h-64">
                    <img
                      src={trip.image}
                      alt={trip.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {trip.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-foreground">{trip.name}</h3>
                    <p className="text-muted-foreground mb-4">{trip.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {trip.price}
                      </span>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/trips">
              <Button variant="hero" size="lg">
                View All Trips
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's plan your perfect eco-adventure together
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="shadow-xl">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
