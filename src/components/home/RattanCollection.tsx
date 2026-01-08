import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getRattanProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';

const RattanCollection = () => {
  const rattanProducts = getRattanProducts();

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-luxury">
        {/* Header with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-forest font-body text-sm tracking-[0.2em] uppercase mb-4">
              Natural Beauty
            </p>
            <h2 className="heading-section mb-6">
              Rattan Collection
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Discover the timeless elegance of our rattan pieces. Each item is handwoven by skilled artisans, bringing natural warmth and texture to your space. From clothes racks to outdoor seating, our rattan collection seamlessly blends with any interior style.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Clothes Rack', 'Shoe Rack', 'Outdoor Seating', 'Shelving', 'Vases', 'Lamp Shades'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-forest/10 text-forest rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link to="/collections/rattan">
              <Button className="bg-forest text-forest-foreground hover:bg-forest/90">
                Explore Rattan Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                alt="Rattan furniture collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rattanProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RattanCollection;
