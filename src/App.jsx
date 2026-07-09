import { Routes, Route } from "react-router-dom";

import Topbar from './components/topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer.jsx";

import Home from './pages/Home.jsx';



function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;