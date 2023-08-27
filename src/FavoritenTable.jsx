import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { MeinKontext } from './MeinKontext'
function FavoritesTable() {
  const { artikels, updateArtikels, favoriten, updateFavoriten } = useContext(MeinKontext);
  const removeFromFavoriten = (index) => {
  const updatedFavoriten = [...favoriten];
    const artikel = artikels.find(artikel => artikel.id == updatedFavoriten[index].id);
    updatedFavoriten.splice(index, 1);
    updateFavoriten(updatedFavoriten);
    const newState = artikels.map(obj => {
      if (obj.id === artikel.id) {
        return { ...obj, isAddedToFavorites: false };
      }
      return obj;
    });
    updateArtikels(newState)
  };

  return (
    <>
      {favoriten.map((artikel, index) => (
        <tr key={index}>
          <td>
            <img src={artikel.imageUrl} alt="No Image" width="100" height="100" />
          </td>
          <td>
            <Link to={'/artikals/' + artikel.id}>{artikel.title}</Link>
          </td>
          <td>{artikel.author}</td>
          <td>{artikel.publishedAt}</td>
          <td>
            <button onClick={() => removeFromFavoriten(index)}>Aus Favoriten löschen</button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default FavoritesTable;