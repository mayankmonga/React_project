
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import AboutPreview from '../components/About/AboutPreview';
import CategoriesPreview from '../components/Categories/Categoriespreview';
import BestSeller from '../components/Products/BestSeller';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutPreview />
      <CategoriesPreview />
      <BestSeller />
    </>
  );
}

export default Home;