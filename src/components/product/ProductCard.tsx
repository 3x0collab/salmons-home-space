import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/formatCurrency';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useCart();

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        'group block bg-card rounded-lg overflow-hidden hover-lift',
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isBestSeller && (
            <Badge className="bg-primary text-primary-foreground">Best Seller</Badge>
          )}
          {product.isNewArrival && (
            <Badge className="bg-forest text-forest-foreground">New</Badge>
          )}
          {product.originalPrice && (
            <Badge className="bg-terracotta text-accent-foreground">Sale</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <Button
            size="icon"
            variant="secondary"
            className={cn(
              'h-10 w-10 rounded-full shadow-medium',
              isInWishlist(product.id) && 'bg-primary text-primary-foreground'
            )}
            onClick={handleWishlistClick}
          >
            <Heart className={cn('h-5 w-5', isInWishlist(product.id) && 'fill-current')} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full shadow-medium"
          >
            <Eye className="h-5 w-5" />
          </Button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-charcoal text-cream hover:bg-charcoal/90"
            disabled={!product.inStock}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-medium mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold">{formatCurrency(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>
        {product.colors && product.colors.length > 0 && (
          <p className="text-xs text-muted-foreground mt-2">
            {product.colors.length} color{product.colors.length > 1 ? 's' : ''} available
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
