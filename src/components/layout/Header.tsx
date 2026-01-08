import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, User, ChevronDown } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { ROOMS } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const { cartCount, wishlist } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-charcoal text-cream text-center py-2 text-sm font-body">
        <p>Free Delivery on Orders Over ₦500,000 | <Link to="/contact" className="underline">Contact Us</Link></p>
      </div>

      {/* Main Header */}
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-2xl font-semibold">
                    Essentials By Salmons
                  </Link>
                </div>
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-4">
                    <Link
                      to="/shop"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Shop All
                    </Link>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Shop by Room</p>
                      {ROOMS.map((room) => (
                        <Link
                          key={room.id}
                          to={`/shop/${room.id}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 hover:text-primary transition-colors"
                        >
                          {room.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/collections/best-sellers"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Best Sellers
                    </Link>
                    <Link
                      to="/collections/rattan"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Rattan Collection
                    </Link>
                    <Link
                      to="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="font-display text-xl lg:text-2xl font-semibold tracking-tight">
            Essentials <span className="text-primary">By Salmons</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-body text-sm font-medium">
                  Shop by Room
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px] grid-cols-3">
                    {ROOMS.map((room) => (
                      <Link
                        key={room.id}
                        to={`/shop/${room.id}`}
                        className="group block p-3 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <div className="font-medium mb-1 group-hover:text-primary transition-colors">
                          {room.name}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {room.subcategories.slice(0, 3).join(', ')}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-body text-sm font-medium">
                  Collections
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link
                      to="/collections/best-sellers"
                      className="group block p-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="font-medium mb-1 group-hover:text-primary transition-colors">
                        Best Sellers
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our most loved pieces across all rooms
                      </p>
                    </Link>
                    <Link
                      to="/collections/new-arrivals"
                      className="group block p-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="font-medium mb-1 group-hover:text-primary transition-colors">
                        New Arrivals
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Fresh additions to our collection
                      </p>
                    </Link>
                    <Link
                      to="/collections/rattan"
                      className="group block p-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="font-medium mb-1 group-hover:text-primary transition-colors">
                        Rattan Collection
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Natural beauty meets modern design
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className="font-body text-sm font-medium px-4 py-2 hover:text-primary transition-colors">
                  Our Story
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="font-body text-sm font-medium px-4 py-2 hover:text-primary transition-colors">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {wishlist.length}
                  </span>
                )}
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
