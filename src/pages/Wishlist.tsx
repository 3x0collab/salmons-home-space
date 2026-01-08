import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/formatCurrency';
import { Button } from '@/components/ui/button';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <Layout>
        <div className="container-luxury py-24 text-center">
          <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="heading-section mb-4">Your Wishlist is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Save your favorite items to revisit them later.
          </p>
          <Link to="/shop">
            <Button className="btn-primary">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-luxury py-12">
        <h1 className="heading-section mb-8">My Wishlist</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.product.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover-lift"
            >
              <Link to={`/product/${item.product.id}`}>
                <div className="aspect-[4/5] bg-secondary overflow-hidden">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {item.product.category}
                </p>
                <Link to={`/product/${item.product.id}`}>
                  <h3 className="font-display font-medium mb-2 hover:text-primary transition-colors line-clamp-1">
                    {item.product.name}
                  </h3>
                </Link>
                <p className="font-semibold mb-4">{formatCurrency(item.product.price)}</p>

                <div className="flex gap-2">
                  <Button
                    onClick={() => addToCart(item.product)}
                    className="flex-1"
                    size="sm"
                    disabled={!item.product.inStock}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromWishlist(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
