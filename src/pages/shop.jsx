import ShopHero from "../components/Hero/ShopHero";
import FeatureCollection from "../components/Products/FeatureColletion";
import ShopBestSeller from "../components/Products/ShopBestSeller";
import ShopBy from "../components/ShopByTheme/ShopBy";
import WhyCustomerChoose from "../components/whychooseus/WhyCustomerChoose";

function Shop (){
    return(
        <>
        <ShopHero />
        <FeatureCollection />
        <ShopBestSeller />
        <ShopBy />
        <WhyCustomerChoose />
        </>
    );
}

export default Shop;