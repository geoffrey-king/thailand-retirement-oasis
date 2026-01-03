import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-teal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-light/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to Begin Your Thai Adventure?
          </h2>
          <p className="text-secondary-foreground/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Let our experts guide you through every step of your retirement journey. 
            From visa assistance to finding your dream home, we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base px-8 py-6 group"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="text-base px-8 py-6 border-secondary-foreground/50 text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              Download Free Guide
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-secondary-foreground/90">
            <a 
              href="tel:+66-2-123-4567" 
              className="flex items-center gap-2 hover:text-secondary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+66 2 123 4567</span>
            </a>
            <a 
              href="mailto:hello@goldenthai.com" 
              className="flex items-center gap-2 hover:text-secondary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@goldenthai.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
