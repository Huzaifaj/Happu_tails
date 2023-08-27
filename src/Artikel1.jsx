import React, { useState , useEffect } from "react";
import CommentSection from "./Kommentar";
import ArtikelRating from "./ArtikelBewertung";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MeinKontext } from './MeinKontext'
import StarRating from './Bewertung';
function Artikel() {
  const { artikels, updateArtikels, favoriten, updateFavoriten } = useContext(MeinKontext);
  const params = useParams();
  const { id } = params;
  const artikel = artikels.find(artikel => artikel.id == id);
  const handleFavorites = () => {
    const newState = artikels.map(obj => {
      if (obj.id === artikel.id) {
        return { ...obj, isAddedToFavorites: !artikel.isAddedToFavorites };
      }
      return obj;
    });
    updateArtikels(newState)
    if (!artikel.isAddedToFavorites) {
      favoriten.push(artikel)
      updateFavoriten(favoriten);
    } else {
      var updatedfavoriten = favoriten.filter(FilteredArtikel => FilteredArtikel.id != artikel.id)
      updateFavoriten(updatedfavoriten);
    }
  }
  const handleRating = (newRating) => {
    const updatedState = artikels.map(obj => {
      if (obj.id === artikel.id) {
        return { ...obj, rating: newRating };
      }
      return obj;
    });
    updateArtikels(updatedState)
};
const [comments, setComments] = useState([]);
useEffect(() => {
  const url = `https://fb1-ecommerce.hs-rw.de/5e3e430e-07a7-4cbb-bf75-455e3e83b3b6/articles/${id}/comments`;
  const fetchData = async () => {
    try {
      const response = await fetch(url);
       const JsonResponse = await response.json();
       setComments(JsonResponse.data.comments);
    } catch (error) {
      console.log("error", error);
    }
  };
  fetchData();
}, []);
  return (
    <main>
      <h1>{artikel.title }</h1>
      <br></br>
      <div dangerouslySetInnerHTML={{ __html: artikel.abstract }}></div>
      <CommentSection />
      <ArtikelRating rating={artikel.rating} handleRating={handleRating}/>
      <button className="handleFavorites" onClick={handleFavorites}>
        {artikel.isAddedToFavorites ? "Schon in den Favoriten" : "Zu den Favoriten hinzufügen"}
      </button>
      <div className="comment-section">
        <h4>Artikelkommentare</h4>
        {
          comments.map( (comment) =>(  <div className="comment-block">
            
            <h3>{comment.title}</h3>
            <StarRating rating={comment.rating} onMouseEnter={function(){}} />
            <p><b>Autor: </b>{comment.author}</p>
            <p>{comment.content}</p>
            <p><b>Veröffentlichungsdatum</b>: {comment.publishedAt}</p>
            </div>)
            
          )
        }
      </div>
    </main>
  );
}
export default Artikel;
