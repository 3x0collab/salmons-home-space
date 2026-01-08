import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getBestSellers } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const BestSellers = () => {
  const bestSellers = getBestSellers();

  return (
    <section className="section-padding">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
              Customer Favorites
            </p>
            <h2 className="heading-section">Best Sellers</h2>
          </div>
          <Link
            to="/collections/best-sellers"
            className="inline-flex items-center font-body font-medium text-charcoal link-underline mt-4 md:mt-0"
          >
            View All Best Sellers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
