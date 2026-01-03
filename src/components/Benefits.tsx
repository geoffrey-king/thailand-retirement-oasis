import { Heart, DollarSign, Sun, Users } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Living",
    description:
      "Live comfortably on $1,500–$2,500/month with domestic help, fine dining, and beautiful housing included.",
  },
  {
    icon: Heart,
    title: "World-Class Healthcare",
    description:
      "Thailand's hospitals are internationally accredited, offering exceptional care at a fraction of Western costs.",
  },
  {
    icon: Sun,
    title: "Perfect Climate",
    description:
      "Enjoy year-round warmth with tropical beaches, lush mountains, and endless sunshine at your doorstep.",
  },
  {
    icon: Users,
    title: "Welcoming Community",
    description:
      "Join a thriving expat community and experience the legendary Thai hospitality and 'Land of Smiles' culture.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Why Thailand
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Perfect Retirement Destination
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From pristine beaches to ancient temples, Thailand offers retirees an 
            unmatched quality of life at an affordable price.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-background shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-border">
          {[
            { value: "50,000+", label: "Western Retirees" },
            { value: "60%", label: "Lower Cost of Living" },
            { value: "#1", label: "Healthcare Ranking" },
            { value: "300+", label: "Sunny Days/Year" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
