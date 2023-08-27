import React, { useState } from "react";
import { useContext } from "react";
import FavoritesTable from './FavoritenTable'; 
import { MeinKontext } from './MeinKontext'


function Favoriten() {
  const { favoriten, updateFavoriten } = useContext(MeinKontext);
  return (
    <main>
      <h2 className="page-heading">Deine Favoritenliste </h2>
      <div className="table-responsive">
      <table className="overview" id="favoritesTable">
        <thead>
          <tr className="text-center">
            <td>
              <h5>Bildvorschau</h5>
            </td>
            <td>
              <h5>Artikelüberschrift</h5>
            </td>
            <td>
              <h5>Autor</h5>
            </td>
            <td>
              <h5>Veröffentlichungsdatum</h5>
            </td>
            <td>
              <h5>Aus Liste nehmen</h5>
            </td>
          </tr>
        </thead>
        <tbody id="tbody1">
        <FavoritesTable favoriten={favoriten} updateFavoriten={updateFavoriten}/>
        </tbody>
      </table>
      </div>
    </main>
  );
}

export default Favoriten;