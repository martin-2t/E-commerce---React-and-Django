import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from "./components/Login/Login";

import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> {/* 👈 ESTO FALTABA */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
