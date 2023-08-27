import React, { useState } from "react";
import CommentSection from "./CommentSection";
import FavoriteButton from "./FavoritenButton";
import Artikel2Content from "./Artical2Content";
import ArtikelRating from "./ArticalRating";

function Artikel2({favoriten , setFavoriten , rating , setRating}) {
 
  const artikel = {
    titel: 'Alles über Hunde',
    autor: 'Marie Grün',
    url: '/artikel2',
    bild_url: 'https://i.pinimg.com/236x/6a/95/83/6a958390de7924f68e1dfbd57d8c41d6.jpg',
    date: '20.04.2023',
  }; 

  return (
    <main>

      <Artikel2Content  />

      <CommentSection />

      <ArticleRating rating={rating} setRating={setRating}/>

      <FavoriteButton artikel={artikel}  favoriten={favoriten} setFavoriten={setFavoriten}/>

    </main>
  );
}

export default Artikel2;
