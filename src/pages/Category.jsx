import CategoryHero from "../components/Hero/CategoryHero";
import ShopByCategory from "../components/Categories/ShopByCategory";
import Collection from "../components/Products/Collection";
import CreatedByPassion from "../components/whychooseus/CreatedByPassion";
import WhyCustomerChoose from "../components/whychooseus/WhyCustomerChoose";
import BestCat from "../components/Products/BestCat";
import BannerCat from "../components/Banner/BannerCat";
import Testimonial from "../components//testimonials/Testimonial"


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
        <Testimonial />

        </>
    );
}


export default Category;