import { Routes, Route } from "react-router-dom";

import Topbar from './components/topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer.jsx";

import Home from './pages/Home.jsx';
import Category from "./pages/Category.jsx"
import About  from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";



function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;