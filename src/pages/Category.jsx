import CategoryHero from "../components/Hero/CategoryHero";
import ShopByCategory from "../components/Categories/ShopByCategory";
import Collection from "../components/Products/Collection";
import CreatedByPassion from "../components/whychooseus/CreatedByPassion";
import WhyCustomerChoose from "../components/whychooseus/WhyCustomerChoose";
import BestCat from "../components/Products/BestCat";
import BannerCat from "../components/Banner/BannerCat";
import TestimonialCat from "../components//testimonials/TestimonialCat"
import Newsletter from "../components/newsletter/Newsletter";


function Category (){
    return(
        <>
        <CategoryHero  />
        <ShopByCategory />
        <Collection />
        <CreatedByPassion />
        <WhyCustomerChoose />
        <BestCat />
        <BannerCat />
        <TestimonialCat />
        <Newsletter />
        </>
    );
}


export default Category;