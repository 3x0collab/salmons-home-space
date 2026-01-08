import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedRooms from '@/components/home/FeaturedRooms';
import BestSellers from '@/components/home/BestSellers';
import BrandStory from '@/components/home/BrandStory';
import RattanCollection from '@/components/home/RattanCollection';
import Testimonials from '@/components/home/Testimonials';
import Features from '@/components/home/Features';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <Features />
      <FeaturedRooms />
      <BestSellers />
      <BrandStory />
      <RattanCollection />
      <Testimonials />
    </Layout>
  );
};

export default Index;
