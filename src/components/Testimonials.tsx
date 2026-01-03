import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Robert & Sarah Mitchell",
    location: "From California, USA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    quote:
      "We retired to Chiang Mai three years ago and have never looked back. Our pension goes three times as far, the healthcare is exceptional, and the people are incredibly warm.",
    rating: 5,
  },
  {
    name: "James Thompson",
    location: "From London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote:
      "After my wife passed, I needed a fresh start. Thailand gave me that and so much more. The expat community here is like family, and I've found peace I never expected.",
    rating: 5,
  },
  {
    name: "Margaret Chen",
    location: "From Sydney, Australia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote:
      "Hua Hin is paradise. I wake up to ocean views, play golf twice a week, and my healthcare costs are 80% less than back home. This is the retirement I dreamed of.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Stories From Our Community
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hear from retirees who made the leap and discovered their perfect 
            Thai retirement.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-2xl bg-background shadow-soft relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/50" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
