import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandStory = () => {
  return (
    <section className="section-padding bg-charcoal text-cream overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
                alt="African artisan crafting furniture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold rounded-lg hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl hidden lg:block" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              Since 2018
            </p>
            <h2 className="heading-section mb-6">
              The Salmons Story
            </h2>
            <div className="space-y-4 text-cream/80 font-body leading-relaxed mb-8">
              <p>
                At The Salmons, we embrace the concept of Total Architecture — an integrated approach that harmonizes design, technology, and environmental factors to create spaces that are deeply connected to their surroundings.
              </p>
              <p>
                We take pride in being the premier Lifestyle brand that curates essential elements for a consumer's lifestyle, ensuring a seamless and flawless space with no gaps or cracks.
              </p>
              <p>
                Our modular and easy-to-ship items are crafted from sustainable materials, reflecting our commitment to both elegance and environmental responsibility.
              </p>
            </div>
            <Link to="/about">
              <Button className="btn-primary">
                Discover Our Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
