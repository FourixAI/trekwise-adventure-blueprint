import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, HandHeart, Recycle, TreePine, ShieldCheck } from "lucide-react";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Sustainability = () => {
  const principles = [
    {
      icon: Leaf,
      title: "Carbon Neutral Operations",
      description:
        "All trips are 100% carbon neutral. We offset emissions through verified reforestation projects in regions where we operate.",
    },
    {
      icon: Users,
      title: "Community Partnership",
      description:
        "We hire local guides, use local accommodations, and ensure fair wages exceed regional standards by 30%+.",
    },
    {
      icon: HandHeart,
      title: "Give Back Fund",
      description:
        "5% of all trip revenue goes directly to community development projects chosen by local partners.",
    },
    {
      icon: Recycle,
      title: "Zero Waste Policy",
      description:
        "Pack-in, pack-out philosophy. All waste is removed from wilderness areas. No single-use plastics on any trip.",
    },
    {
      icon: TreePine,
      title: "Conservation Support",
      description:
        "We partner with conservation organizations and contribute to habitat protection in every region we visit.",
    },
    {
      icon: ShieldCheck,
      title: "Ethical Standards",
      description:
        "B Corp certified. Regular third-party audits ensure we meet the highest standards of social and environmental performance.",
    },
  ];

  const impacts = [
    {
      number: "$580K+",
      label: "Community Investment",
      description: "Invested in local economies since 2015",
    },
    {
      number: "42,000",
      label: "Trees Planted",
      description: "Through carbon offset programs",
    },
    {
      number: "100%",
      label: "Local Guides",
      description: "All wilderness guides are from local communities",
    },
    {
      number: "Zero",
      label: "Single-Use Plastics",
      description: "Eliminated from all operations in 2019",
    },
  ];

  const partnerships = [
    {
      name: "Sherpa Foundation",
      location: "Nepal",
      project: "Education and healthcare support for high-altitude communities",
    },
    {
      name: "Patagonia Conservation Alliance",
      location: "Argentina & Chile",
      project: "Wildlife corridor protection and habitat restoration",
    },
    {
      name: "Tasmania Wilderness Trust",
      location: "Australia",
      project: "Ancient forest preservation and native species protection",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sustainabilityImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Travel That Gives Back
          </h1>
          <p className="text-xl text-white/95 drop-shadow-md">
            Our commitment to people, planet, and responsible adventure
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Our Promise</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe wilderness areas and the communities who steward them deserve our deepest respect. 
            Every TrekWise expedition is designed to minimize environmental impact while maximizing positive 
            social outcomes. We don't just visit these places—we invest in their long-term preservation and prosperity.
          </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="border-border hover:shadow-[var(--adventure-shadow)] transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <principle.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{impact.number}</div>
                <div className="text-xl font-semibold mb-2 opacity-95">{impact.label}</div>
                <p className="text-sm opacity-90">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partnerships */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Community Partnerships</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We partner with local organizations to ensure our presence creates lasting positive impact
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-2 text-foreground">{partner.name}</h3>
                  <p className="text-primary font-semibold mb-3">{partner.location}</p>
                  <p className="text-muted-foreground">{partner.project}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler Guidelines */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">How You Can Help</h2>
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Before Your Trip</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Purchase carbon offset for your international flights (we can help arrange this)</li>
                    <li>• Pack reusable water bottles, utensils, and shopping bags</li>
                    <li>• Learn basic phrases in the local language</li>
                    <li>• Research cultural customs and appropriate behavior</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">During Your Trip</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Follow Leave No Trace principles at all times</li>
                    <li>• Buy from local artisans and family-owned businesses</li>
                    <li>• Ask permission before photographing people</li>
                    <li>• Stay on marked trails to prevent erosion</li>
                    <li>• Respect wildlife by maintaining proper distances</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">After Your Trip</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Share your experiences to inspire responsible travel</li>
                    <li>• Consider supporting our partner organizations directly</li>
                    <li>• Provide feedback to help us improve our practices</li>
                    <li>• Stay connected with the communities you visited</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Our Certifications & Memberships</h2>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">B Corporation Certified</p>
              <p className="text-sm">Since 2017</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Leave No Trace</p>
              <p className="text-sm">Master Educator Program</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Adventure Travel Trade Association</p>
              <p className="text-sm">Member since 2015</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">1% for the Planet</p>
              <p className="text-sm">Annual Contributor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
