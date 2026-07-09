
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import AboutPreview from '../components/About/AboutPreview';
import CategoriesPreview from '../components/Categories/Categoriespreview';
import BestSeller from '../components/Products/BestSeller';
import ShopByTheme from '../components/ShopByTheme/ShopByTheme';
import Testimonial from '../components/testimonials/Testimonial';
import SocialMedia from '../components/socialmedia/SocialMedia';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutPreview />
      <CategoriesPreview />
      <BestSeller />
      <ShopByTheme />
      <Testimonial />
      <SocialMedia />
    </>
  );
}

export default Home;