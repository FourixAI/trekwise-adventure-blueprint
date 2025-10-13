import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Compass, Users, Award } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Lead Guide",
      bio: "20+ years guiding expeditions across 6 continents. Certified wilderness first responder and Leave No Trace master educator.",
    },
    {
      name: "Carlos Mendoza",
      role: "Operations Director",
      bio: "Former environmental scientist turned adventure specialist. Fluent in 4 languages with expertise in sustainable tourism development.",
    },
    {
      name: "Mei Chen",
      role: "Cultural Liaison",
      bio: "Builds partnerships with indigenous communities worldwide. Ensures authentic cultural exchanges that benefit local economies.",
    },
    {
      name: "James O'Brien",
      role: "Lead Logistics Coordinator",
      bio: "Ex-military logistics expert turned trekking coordinator. Ensures seamless operations in the world's most remote locations.",
    },
  ];

  const milestones = [
    { year: "2015", text: "TrekWise founded with first expedition to Nepal" },
    { year: "2017", text: "Became certified B Corporation for sustainable business" },
    { year: "2019", text: "Expanded to South America with Patagonia routes" },
    { year: "2021", text: "Launched community development fund ($500K+ raised)" },
    { year: "2023", text: "Carbon-neutral operations achieved across all trips" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl opacity-95">
            Born from a passion for authentic wilderness experiences and meaningful connections
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                TrekWise exists to connect adventurous souls with the world's most spectacular wilderness areas while creating positive, lasting impacts on the communities and ecosystems we visit.
              </p>
              <p className="text-muted-foreground text-lg">
                We believe that travel should transform both the traveler and the places they explore—leaving each better than we found them.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <Mountain className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl text-foreground">87+</h3>
                  <p className="text-muted-foreground text-sm">Expeditions Led</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl text-foreground">1,200+</h3>
                  <p className="text-muted-foreground text-sm">Happy Trekkers</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <Compass className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl text-foreground">23</h3>
                  <p className="text-muted-foreground text-sm">Countries Explored</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl text-foreground">100%</h3>
                  <p className="text-muted-foreground text-sm">Carbon Neutral</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {milestone.year}
                </div>
                <Card className="flex-1 border-border">
                  <CardContent className="pt-6">
                    <p className="text-lg text-foreground">{milestone.text}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experienced guides and coordinators dedicated to your adventure
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-[var(--adventure-shadow)] transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-3">Authenticity</h3>
              <p className="opacity-95">
                Real wilderness experiences, not tourist traps. We go where others don't.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-3">Responsibility</h3>
              <p className="opacity-95">
                Every trip supports local communities and protects natural habitats.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-3">Excellence</h3>
              <p className="opacity-95">
                Top-tier guides, equipment, and safety standards on every expedition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
