import React, { useState } from "react";
import { useContext } from "react";
import FavoritesTable from './FavoritenTable'; 
import { MeinKontext } from './MeinKontext'


function Favoriten() {
  const { favoriten, updateFavoriten } = useContext(MeinKontext);
  return (
    <main>
      <h2 className="page-heading">Deine Favoritenliste </h2>
      <table className="overview" id="favoritesTable">
        <thead>
          <tr>
            <td>
              <h3>Bildvorschau</h3>
            </td>
            <td>
              <h3>Artikelüberschrift</h3>
            </td>
            <td>
              <h3>Autor</h3>
            </td>
            <td>
              <h3>Veröffentlichungsdatum</h3>
            </td>
            <td>
              <h3>Aus Liste nehmen</h3>
            </td>
          </tr>
        </thead>
        <tbody id="tbody1">
        <FavoritesTable favoriten={favoriten} updateFavoriten={updateFavoriten}/>
        </tbody>
      </table>

    </main>
  );
}

export default Favoriten;
