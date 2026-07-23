import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Category = lazy(() => import("./pages/Category.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Shop = lazy(() => import("./pages/shop.jsx"));

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Suspense fallback={<h2 className="text-center p-10 m-5">Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
