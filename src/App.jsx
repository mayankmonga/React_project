import { Routes, Route } from "react-router-dom";

import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home.jsx';



function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;