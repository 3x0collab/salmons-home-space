import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
          alt="Luxury African-inspired living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10">
        <div className="max-w-2xl">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Premium Afrocentric Living
          </p>
          <h1 className="heading-display text-cream mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Curating Spaces That Tell Your Story
          </h1>
          <p className="text-cream/80 text-lg md:text-xl mb-8 font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover furniture and interior accessories that blend modern elegance with rich African heritage. Every piece is crafted with intention.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/shop">
              <Button className="btn-primary text-base px-8 py-6">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-cream text-cream hover:bg-cream hover:text-charcoal text-base px-8 py-6">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
