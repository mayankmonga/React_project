import ShopHero from "../components/Hero/ShopHero";
import FeatureCollection from "../components/Products/FeatureColletion";
import ShopBestSeller from "../components/Products/ShopBestSeller";
import ShopBy from "../components/ShopByTheme/ShopBy";
import WhyCustomerChoose from "../components/whychooseus/WhyCustomerChoose";
import TestimonialCat from "../components/testimonials/TestimonialCat"
import BannerShop from "../components/Banner/BannerShop";

function Shop (){
    return(
        <>
        <ShopHero />
        <FeatureCollection />
        <ShopBestSeller />
        <ShopBy />
        <WhyCustomerChoose />
        <TestimonialCat />
        <BannerShop />
        </>
    );
}

export default Shop;