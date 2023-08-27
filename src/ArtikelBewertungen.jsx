import React, { useEffect, useState } from 'react';
import StarRating from './Bewertung';

function ArtikelRating({rating , handleRating }) {
    
      return (
        <div className="mt-4">
          <h4>Bewerten Sie diesen Artikel</h4>
          <StarRating rating={rating} onMouseEnter={handleRating} />
        </div>
      );
  }

  export default ArtikelRating;