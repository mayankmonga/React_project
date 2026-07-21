import BannerContact from "../components/Banner/BannerContact";
import ContactForm from "../components/Contactform/ContactForm";
import ContactHero from "../components/Hero/ContactHero";

function Contact (){
    return(
        <>
            <ContactHero />
            <ContactForm />
            <BannerContact />
        </>
    );
}

export default Contact;