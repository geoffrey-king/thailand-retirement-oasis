import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import chiangMaiImage from "@/assets/destination-chiang-mai.jpg";
import phuketImage from "@/assets/destination-phuket.jpg";
import huaHinImage from "@/assets/destination-hua-hin.jpg";

const destinations = [
  {
    name: "Chiang Mai",
    image: chiangMaiImage,
    description:
      "The cultural heart of the north. Cool mountain climate, ancient temples, and a thriving arts scene.",
    highlights: ["Cool Climate", "Cultural Hub", "Affordable"],
  },
  {
    name: "Phuket",
    image: phuketImage,
    description:
      "Thailand's largest island paradise. World-class beaches, golf courses, and international dining.",
    highlights: ["Beach Living", "Nightlife", "Modern Amenities"],
  },
  {
    name: "Hua Hin",
    image: huaHinImage,
    description:
      "The royal seaside resort. Elegant, peaceful, and just 3 hours from Bangkok's conveniences.",
    highlights: ["Royal Heritage", "Golf Paradise", "Family Friendly"],
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Popular Destinations
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Find Your Perfect Location
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From mountain retreats to beachfront paradises, discover Thailand's 
            most beloved retirement destinations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-cream">
                  <MapPin className="w-5 h-5" />
                  <span className="font-display text-xl font-semibold">
                    {destination.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
