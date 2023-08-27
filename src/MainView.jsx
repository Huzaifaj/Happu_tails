import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './Header'
import Footer from './Footer'
import React from "react";
import Startseite from './Startseite'
import Impressum from './Impressum'
import Kontakt from './Kontakt'
import Artikel from './Artikel';
import Favoriten from './Favoriten';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MeinKontext } from "./MeinKontext";

function MainView() {
  var initialArtikels = [];
  const [artikels, updateArtikels] = useState(initialArtikels);
  const [favoriten, updateFavoriten] = useState([]);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    const url = "https://fb1-ecommerce.hs-rw.de/5e3e430e-07a7-4cbb-bf75-455e3e83b3b6/articles";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
         const JsonResponse = await response.json();
         updateArtikels(JsonResponse.data.articles);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
}, []);
console.log(artikels)
  return (
    <>
      <MeinKontext.Provider value={{ artikels, updateArtikels, favoriten, updateFavoriten , rating, setRating}}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Startseite artikels={artikels} />} />
            <Route path="/favoriten" element={<Favoriten favoriten={favoriten} />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/artikals/:id" element={<Artikel/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MeinKontext.Provider>
    </>
  )
}

export default MainView;

