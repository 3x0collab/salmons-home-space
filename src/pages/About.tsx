import { ArrowRight, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            alt="African-inspired interior design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="max-w-2xl">
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="heading-display text-cream mb-6">
              The Salmons Story
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              At The Salmons, we embrace the concept of <strong className="text-foreground">Total Architecture</strong> — an integrated approach that harmonizes design, technology, and environmental factors to create spaces that are deeply connected to their surroundings.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              We take pride in being the premier Lifestyle brand that curates essential elements for a consumer's lifestyle, ensuring a seamless and flawless space with no gaps or cracks.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Since <strong className="text-foreground">2018</strong>, we have been championing Afrocentric living through our high-quality products, exclusive designs, and timeless styles. Our modular and easy-to-ship items are crafted from sustainable materials, reflecting our commitment to both elegance and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary/50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-soft">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="heading-card mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become a leading Lifestyle brand known for exceptional quality that meets consumer desires, thereby capturing a significant market share in Nigerian society and beyond.
              </p>
            </div>

            <div className="bg-card p-8 md:p-12 rounded-lg shadow-soft">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest/10 text-forest mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="heading-card mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To promote creative collaboration between our team of architects and artisans, fostering a deep connection with our customers' lifestyles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="heading-section">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality', desc: 'Every piece is crafted to the highest standards of excellence' },
              { title: 'Heritage', desc: 'Celebrating African design traditions in modern contexts' },
              { title: 'Sustainability', desc: 'Committed to eco-friendly materials and practices' },
              { title: 'Innovation', desc: 'Blending traditional craftsmanship with modern design' },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-display text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="container-luxury text-center">
          <h2 className="heading-section mb-6">Ready to Transform Your Space?</h2>
          <p className="text-cream/70 max-w-xl mx-auto mb-8">
            Explore our curated collection and discover furniture that tells your story.
          </p>
          <Link to="/shop">
            <Button className="btn-primary">
              Shop Our Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
