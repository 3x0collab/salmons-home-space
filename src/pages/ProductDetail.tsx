import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Heart, ShoppingBag, Truck, Shield, ArrowLeft, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/formatCurrency';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist, addToRecentlyViewed } = useCart();

  const product = getProductById(id || '');

  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product]);

  if (!product) {
    return (
      <Layout>
        <div className="container-luxury py-24 text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter(p => p.room === product.room && p.id !== product.id)
    .slice(0, 4);

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Layout>
      <div className="container-luxury py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop/${product.room}`} className="hover:text-foreground transition-colors capitalize">
            {product.room.replace('-', ' ')}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors',
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    )}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isBestSeller && (
                <Badge className="bg-primary text-primary-foreground">Best Seller</Badge>
              )}
              {product.isNewArrival && (
                <Badge className="bg-forest text-forest-foreground">New Arrival</Badge>
              )}
              {product.originalPrice && (
                <Badge className="bg-terracotta text-accent-foreground">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% Off
                </Badge>
              )}
            </div>

            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="heading-section mb-4">{product.name}</h1>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-display font-semibold">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h4 className="font-medium mb-3">Colors</h4>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="px-4 py-2 border border-border rounded-full text-sm hover:border-primary transition-colors cursor-pointer"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h4 className="font-medium mb-3">Quantity</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                {product.stockCount && (
                  <span className="text-sm text-muted-foreground">
                    {product.stockCount} in stock
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                className="btn-primary flex-1"
                disabled={!product.inStock}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button
                variant="outline"
                onClick={handleWishlistClick}
                className={cn(
                  'px-6',
                  isInWishlist(product.id) && 'bg-primary/10 border-primary text-primary'
                )}
              >
                <Heart className={cn('h-5 w-5', isInWishlist(product.id) && 'fill-current')} />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-secondary rounded-lg">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Free delivery over ₦500K</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">2-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger
                value="details"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="dimensions"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Dimensions
              </TabsTrigger>
              <TabsTrigger
                value="care"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Care Instructions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display font-medium mb-4">Product Details</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Handcrafted by skilled artisans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Made from sustainable materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Easy assembly with included tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Premium quality finish</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-medium mb-4">Specifications</h4>
                  <dl className="space-y-3">
                    {product.material && (
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Material</dt>
                        <dd>{product.material}</dd>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd>{product.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Room</dt>
                      <dd className="capitalize">{product.room.replace('-', ' ')}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="dimensions" className="py-8">
              <p className="text-muted-foreground">
                {product.dimensions || 'Dimensions will be provided upon request. Contact us for detailed measurements.'}
              </p>
            </TabsContent>
            <TabsContent value="care" className="py-8">
              <ul className="space-y-3 text-muted-foreground">
                <li>• Dust regularly with a soft, dry cloth</li>
                <li>• Avoid direct sunlight to prevent fading</li>
                <li>• Use coasters to prevent water rings</li>
                <li>• Clean spills immediately with a damp cloth</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="heading-section mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
