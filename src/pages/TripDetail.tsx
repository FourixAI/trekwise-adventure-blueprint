import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, TrendingUp, CheckCircle2, X } from "lucide-react";
import patagoniaImage from "@/assets/patagonia.jpg";
import nepalImage from "@/assets/nepal.jpg";
import tasmaniaImage from "@/assets/tasmania.jpg";

const TripDetail = () => {
  const { tripId } = useParams();

  const tripData = {
    patagonia: {
      name: "Patagonia Explorer",
      location: "Torres del Paine National Park, Argentina & Chile",
      duration: "10 days / 9 nights",
      difficulty: "Challenging",
      groupSize: "8-12 people",
      image: patagoniaImage,
      price: "$3,450",
      dates: ["March 15-24, 2025", "April 5-14, 2025", "October 10-19, 2025"],
      overview:
        "Experience the raw, untamed beauty of Patagonia on this 10-day expedition through one of Earth's most dramatic landscapes. Trek beneath soaring granite spires, kayak across turquoise glacial lakes, and camp under some of the clearest night skies on the planet.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Punta Arenas",
          description: "Welcome dinner and expedition briefing. Meet your guides and fellow trekkers.",
        },
        {
          day: "Day 2",
          title: "Transfer to Torres del Paine",
          description: "Drive through Patagonian steppe. First views of the iconic towers. Afternoon acclimatization hike.",
        },
        {
          day: "Day 3-4",
          title: "Base Torres Trek",
          description: "Full-day trek to the base of the Torres. 8-hour round trip through river valleys and alpine terrain.",
        },
        {
          day: "Day 5",
          title: "Grey Glacier",
          description: "Boat excursion to Grey Glacier. Optional kayaking. Camp lakeside with glacier views.",
        },
        {
          day: "Day 6-7",
          title: "French Valley",
          description: "Trek through the French Valley. Surrounded by hanging glaciers and granite walls.",
        },
        {
          day: "Day 8",
          title: "Perito Moreno Glacier",
          description: "Cross into Argentina. Full day at one of the world's most accessible glaciers.",
        },
        {
          day: "Day 9",
          title: "El Chaltén",
          description: "Hike to Laguna de los Tres for views of Mount Fitz Roy at sunrise.",
        },
        {
          day: "Day 10",
          title: "Departure",
          description: "Morning at leisure. Transfer to El Calafate airport.",
        },
      ],
      included: [
        "All accommodations (mix of camping and lodges)",
        "All meals throughout the expedition",
        "Professional bilingual guides (2 per group)",
        "All ground transportation",
        "Camping equipment (tents, sleeping pads, cooking gear)",
        "Park entrance fees and permits",
        "Boat and kayak excursions",
        "Emergency evacuation insurance",
      ],
      notIncluded: [
        "International flights",
        "Travel insurance (mandatory)",
        "Alcoholic beverages",
        "Personal hiking gear (boots, backpack, clothing)",
        "Tips for guides (suggested $150-200 per person)",
      ],
      fitness:
        "This trip requires good physical fitness. Daily hikes range from 5-8 hours over varied terrain. Prior hiking experience recommended. You should be comfortable carrying a 20-30 lb daypack.",
    },
    nepal: {
      name: "Nepal High Rim",
      location: "Annapurna Region, Nepal",
      duration: "14 days / 13 nights",
      difficulty: "Moderate to Challenging",
      groupSize: "6-10 people",
      image: nepalImage,
      price: "$2,890",
      dates: ["March 20 - April 2, 2025", "October 5-18, 2025", "November 3-16, 2025"],
      overview:
        "Trek through the heart of the Himalayas with experienced Sherpa guides on this 14-day journey. Experience authentic mountain culture, stay in traditional teahouses, and wake to views of the world's highest peaks.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Kathmandu",
          description: "Airport pickup. Check into hotel. Evening welcome dinner with team briefing.",
        },
        {
          day: "Day 2",
          title: "Kathmandu Exploration",
          description: "Visit Swayambhunath Stupa and Durbar Square. Final gear check and preparation.",
        },
        {
          day: "Day 3",
          title: "Drive to Pokhara",
          description: "Scenic 6-hour drive. Afternoon walk along Phewa Lake.",
        },
        {
          day: "Day 4",
          title: "Trek to Tikhedhunga",
          description: "Begin trekking. 4-hour hike following the Modi Khola river valley.",
        },
        {
          day: "Day 5",
          title: "Tikhedhunga to Ghorepani",
          description: "Challenging climb of 3,000+ stone steps through rhododendron forests.",
        },
        {
          day: "Day 6",
          title: "Poon Hill Sunrise",
          description: "Pre-dawn hike to Poon Hill (3,210m). Panoramic views of Annapurna and Dhaulagiri ranges.",
        },
        {
          day: "Day 7-10",
          title: "Annapurna Base Camp Trek",
          description: "Trek through diverse landscapes from subtropical forests to high alpine terrain.",
        },
        {
          day: "Day 11",
          title: "Annapurna Base Camp",
          description: "Sunrise at base camp (4,130m). Full day to explore and acclimatize.",
        },
        {
          day: "Day 12",
          title: "Descend to Bamboo",
          description: "Begin descent through alpine meadows and forests.",
        },
        {
          day: "Day 13",
          title: "Return to Pokhara",
          description: "Final trek day. Drive back to Pokhara. Celebration dinner.",
        },
        {
          day: "Day 14",
          title: "Departure",
          description: "Transfer to Kathmandu or onward travel.",
        },
      ],
      included: [
        "All accommodations (hotels in cities, teahouses on trek)",
        "All meals during trekking portion",
        "Professional Sherpa guides and porters",
        "All ground transportation",
        "Annapurna Conservation Area Permit (ACAP)",
        "TIMS card (Trekkers' Information Management System)",
        "Kathmandu sightseeing with guide",
        "Emergency evacuation arrangements",
      ],
      notIncluded: [
        "International flights",
        "Nepal visa ($50, available on arrival)",
        "Meals in Kathmandu and Pokhara (except welcome/farewell dinners)",
        "Travel insurance (mandatory, must cover altitude)",
        "Personal trekking equipment",
        "Hot showers at teahouses ($3-5 each)",
        "Tips for guides and porters (suggested $200-250 per person)",
      ],
      fitness:
        "Moderate fitness required. Daily treks average 5-6 hours. Maximum altitude 4,130m. Prior trekking experience helpful but not required. Good preparation and positive attitude essential.",
    },
    tasmania: {
      name: "Tasmanian Wilderness Trek",
      location: "Southwest Tasmania, Australia",
      duration: "7 days / 6 nights",
      difficulty: "Moderate",
      groupSize: "8-12 people",
      image: tasmaniaImage,
      price: "$2,150",
      dates: ["February 12-18, 2025", "March 8-14, 2025", "April 15-21, 2025"],
      overview:
        "Discover one of the world's last true wilderness areas on this week-long trek through Tasmania's ancient rainforests and dramatic coastline. This expedition showcases the island's unique ecology and pristine natural beauty.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Hobart",
          description: "Afternoon arrival. Hotel check-in. Evening briefing and welcome dinner.",
        },
        {
          day: "Day 2",
          title: "Mount Field National Park",
          description: "Explore towering swamp gums and Russell Falls. Practice hike. Camp setup.",
        },
        {
          day: "Day 3",
          title: "Cradle Mountain",
          description: "Drive to Cradle Mountain. Begin trek through buttongrass plains. Camp at Waterfall Valley.",
        },
        {
          day: "Day 4",
          title: "Cradle Summit",
          description: "Optional summit of Cradle Mountain (1,545m). Afternoon at Dove Lake.",
        },
        {
          day: "Day 5",
          title: "Ancient Rainforest",
          description: "Trek through 2,000-year-old forests. Spot wildlife. Camp in pristine wilderness.",
        },
        {
          day: "Day 6",
          title: "Coastal Cliffs",
          description: "Hike dramatic coastal cliffs. Possible whale sightings (seasonal). Beach camping.",
        },
        {
          day: "Day 7",
          title: "Return to Hobart",
          description: "Morning coastal walk. Drive to Hobart. Farewell lunch. Afternoon departures.",
        },
      ],
      included: [
        "All accommodations (1 night hotel, 5 nights camping)",
        "All meals throughout expedition",
        "Professional wilderness guides (2 per group)",
        "All camping equipment",
        "All ground transportation",
        "Park entry fees",
        "Wildlife spotting sessions",
        "Emergency communication equipment",
      ],
      notIncluded: [
        "Flights to/from Hobart",
        "Travel insurance",
        "Alcoholic beverages",
        "Personal hiking gear",
        "Optional activities",
        "Tips for guides (suggested $100-150 per person)",
      ],
      fitness:
        "Moderate fitness level required. Daily hikes average 4-5 hours with some elevation gain. Terrain includes boardwalks, forest trails, and rocky coastal paths. Suitable for active beginners.",
    },
  };

  const trip = tripId ? tripData[tripId as keyof typeof tripData] : null;

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Trip Not Found</h1>
          <Link to="/trips">
            <Button variant="hero">Back to All Trips</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trip.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {trip.name}
          </h1>
          <p className="text-xl text-white/95 drop-shadow-md">{trip.location}</p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Duration</p>
                <p className="font-semibold">{trip.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Difficulty</p>
                <p className="font-semibold">{trip.difficulty}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Group Size</p>
                <p className="font-semibold">{trip.groupSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Price</p>
                <p className="font-semibold text-2xl">{trip.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{trip.overview}</p>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Detailed Itinerary</h2>
                <div className="space-y-4">
                  {trip.itinerary.map((day, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1 text-foreground">
                              {day.day}: {day.title}
                            </h3>
                            <p className="text-muted-foreground">{day.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">What's Included</h2>
                  <ul className="space-y-2">
                    {trip.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Not Included</h2>
                  <ul className="space-y-2">
                    {trip.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fitness Requirements */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Fitness Requirements</h2>
                <Card className="border-border bg-muted">
                  <CardContent className="pt-6">
                    <p className="text-foreground">{trip.fitness}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-border sticky top-24 shadow-[var(--adventure-shadow)]">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-2">From</p>
                    <p className="text-4xl font-bold text-primary mb-1">{trip.price}</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Available Dates</h3>
                      <ul className="space-y-2">
                        {trip.dates.map((date, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {date}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link to="/contact">
                      <Button variant="hero" className="w-full" size="lg">
                        Book This Trip
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        Request More Info
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      Questions? Call us at<br />
                      <span className="font-semibold text-foreground">+1 (555) 123-4567</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripDetail;
