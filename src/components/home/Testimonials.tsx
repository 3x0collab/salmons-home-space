import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Adaeze Okonkwo',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: 'The quality of the furniture is exceptional. My living room has been completely transformed with the Adinkra Velvet Sofa. It\'s become the centerpiece of our home.',
    product: 'Adinkra Velvet Sofa',
  },
  {
    id: 2,
    name: 'Olumide Adeyemi',
    location: 'Abuja, Nigeria',
    rating: 5,
    text: 'Essentials By Salmons understands African aesthetics like no other. The craftsmanship is impeccable, and the customer service made the entire experience seamless.',
    product: 'Ubuntu Dining Table',
  },
  {
    id: 3,
    name: 'Chioma Nwosu',
    location: 'Port Harcourt, Nigeria',
    rating: 5,
    text: 'I love how each piece tells a story. The attention to detail and use of sustainable materials aligns perfectly with my values. Highly recommend!',
    product: 'Safari Rattan Lounge Set',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            What Our Customers Say
          </p>
          <h2 className="heading-section">The Salmons Family</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-lg border border-border hover-lift"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-display font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-xs text-primary mt-1">Purchased: {testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
