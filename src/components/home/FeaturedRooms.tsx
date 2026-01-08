import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROOMS } from '@/types/product';

const roomImages: Record<string, string> = {
  'living-room': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
  'bedroom': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000&auto=format&fit=crop',
  'dining': 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2000&auto=format&fit=crop',
  'storage': 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2000&auto=format&fit=crop',
  'accessories': 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2000&auto=format&fit=crop',
  'lighting': 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2000&auto=format&fit=crop',
};

const featuredRooms = ROOMS.filter(room => 
  ['living-room', 'bedroom', 'dining', 'storage', 'accessories', 'lighting'].includes(room.id)
);

const FeaturedRooms = () => {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            Shop by Space
          </p>
          <h2 className="heading-section mb-4">Design Every Room</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our curated collections for every space in your home. Each room tells a unique story.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRooms.map((room, index) => (
            <Link
              key={room.id}
              to={`/shop/${room.id}`}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-square ${index === 0 ? 'md:aspect-[4/3]' : ''}`}>
                <img
                  src={roomImages[room.id]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className={`font-display text-cream mb-2 ${index === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                  {room.name}
                </h3>
                <p className="text-cream/70 text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>
                <div className="flex items-center text-gold font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center font-body font-medium text-charcoal link-underline"
          >
            View All Rooms
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
