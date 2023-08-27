import React, { useEffect, useState } from 'react';

function FavoriteButton({ artikel , favoriten , setFavoriten}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const alreadyAdded = favoriten.find((a) => a.titel === artikel.titel);
    setIsFavorite(alreadyAdded !== undefined);
  }, [favoriten, artikel]);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    setFavoriten([...favoriten, artikel]);
  };


  return (
    <>
      <div className="Button">
        <input
          type="submit"
          value={isFavorite ? 'Artikel ist ein Favorit' : 'Zu Favoriten hinzufügen'}
          onClick={handleFavoriteClick}
          id="addFavoriteBtn"
          disabled={isFavorite}
        />
      </div>
    </>
  );
}

export default FavoriteButton;