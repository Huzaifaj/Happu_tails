import React from "react";
import Bewertung from "./Bewertung";
import { Link } from "react-router-dom";

function Startseite({ artikels }) {
    const handleRating = (newRating) => {
        console.log(newRating);
    }
    return (
        <main>
            <div className="overview-table">
                <div className="table-responsive">
                <table className="overview">
                    <thead className="text-center">
                        <tr>
                            <th>Bildvorschau</th>
                            <th className="overview1">Artikelüberschrift</th>
                            <th>Autor</th>
                            <th>Veröffentlichungsdatum</th>
                            <th>Bewertung</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            artikels.map(artikel => (
                                <tr key={artikel.id}>
                                    <td>
                                      <img src={artikel.imageUrl} alt="Kein Bild" height={150} />
                                    </td>
                                    <td>
                                        <Link to={'/artikals/' + artikel.id}>{artikel.title}</Link>
                                    </td>
                                    <td>{artikel.author}</td>

                                    <td>{artikel.publishedAt}</td>
                                    <td><Bewertung rating={artikel.rating} onMouseEnter={handleRating} /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </main>
    );
}

export default Startseite;