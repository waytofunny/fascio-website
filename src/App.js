import {Routes, Route, Router } from 'react-router-dom';

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import GallerySection from "./components/gallery/Gallery";
import Services from "./components/services/Services";
import PriceList from "./components/pricelist/PriceList";
import Footer from "./components/footer/Footer";
import ContactUs from './components/contact/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <GallerySection/>
      <PriceList/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
