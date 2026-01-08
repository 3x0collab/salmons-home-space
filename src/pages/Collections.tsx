import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { getBestSellers, getNewArrivals, getRattanProducts } from '@/data/products';

const collectionData: Record<string, {
  title: string;
  description: string;
  getProducts: () => ReturnType<typeof getBestSellers>;
}> = {
  'best-sellers': {
    title: 'Best Sellers',
    description: 'Our most loved pieces, chosen by customers like you.',
    getProducts: getBestSellers,
  },
  'new-arrivals': {
    title: 'New Arrivals',
    description: 'Fresh additions to our collection. Be the first to discover.',
    getProducts: getNewArrivals,
  },
  'rattan': {
    title: 'Rattan Collection',
    description: 'Handwoven natural beauty for a warmer, more organic space.',
    getProducts: getRattanProducts,
  },
};

const Collections = () => {
  const { collection } = useParams<{ collection: string }>();
  const data = collection ? collectionData[collection] : null;

  if (!data) {
    return (
      <Layout>
        <div className="container-luxury py-24 text-center">
          <h1 className="heading-section mb-4">Collection Not Found</h1>
          <p className="text-muted-foreground mb-8">The collection you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn-primary inline-flex items-center">
            Browse All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Layout>
    );
  }

  const products = data.getProducts();

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-secondary py-16 md:py-24">
        <div className="container-luxury">
          <h1 className="heading-display text-center mb-4">{data.title}</h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto">
            {data.description}
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="container-luxury py-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-8">No products in this collection yet.</p>
            <Link to="/shop" className="btn-primary inline-flex items-center">
              Browse All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Collections;
