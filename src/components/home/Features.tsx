import { Truck, Shield, Leaf, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Free delivery on orders over ₦500,000 within Lagos and Abuja',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '2-year warranty on all furniture pieces for your peace of mind',
  },
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'Crafted from responsibly sourced, eco-friendly materials',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated design consultants to help style your space',
  },
];

const Features = () => {
  return (
    <section className="py-16 border-t border-b border-border">
      <div className="container-luxury">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
