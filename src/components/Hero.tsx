import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-thailand.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Thailand beach at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p 
            className="text-gold-light font-medium tracking-widest uppercase text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Your Paradise Awaits
          </p>
          
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Retire in the Land of{" "}
            <span className="text-gradient-gold">Golden Smiles</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Discover why thousands choose Thailand for their golden years. 
            World-class healthcare, affordable luxury, and endless tropical beauty await you.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Explore Retirement Options
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
              Watch Our Story
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <a 
            href="#benefits" 
            className="flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition-colors"
          >
            <span className="text-sm font-medium">Discover More</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
