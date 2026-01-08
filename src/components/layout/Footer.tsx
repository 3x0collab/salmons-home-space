import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ROOMS } from '@/types/product';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Newsletter Section */}
      <div className="border-b border-cream/10">
        <div className="container-luxury py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="heading-section mb-4">Join The Salmons Family</h3>
            <p className="text-cream/70 mb-8">
              Subscribe to receive exclusive offers, early access to new collections, and interior design inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 flex-1"
              />
              <Button className="bg-gradient-gold text-charcoal hover:shadow-gold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl font-semibold inline-block mb-6">
              Essentials <span className="text-primary">By Salmons</span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Championing Afrocentric living through high-quality products, exclusive designs, and timeless styles since 2018.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop by Room */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Shop by Room</h4>
            <ul className="space-y-3">
              {ROOMS.slice(0, 6).map((room) => (
                <li key={room.id}>
                  <Link
                    to={`/shop/${room.id}`}
                    className="text-cream/70 hover:text-cream transition-colors text-sm"
                  >
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/collections/best-sellers" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/collections/new-arrivals" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">
                  123 Victoria Island, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+2348012345678" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:hello@salmonsessentials.com" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  hello@salmonsessentials.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © 2024 Essentials By Salmons. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-cream/50 hover:text-cream transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-cream/50 hover:text-cream transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
