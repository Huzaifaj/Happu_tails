import React, { useEffect, useState } from 'react';
import StarRating from './StarRating';

function ArtikelRating({rating , setRating }) {
    
    const handleMouseEnter = (newRating) => {
        setRating(newRating);
    };
    
      return (
        <div>
          <h4>Bewerten Sie diesen Artikel</h4>
          <StarRating rating={rating} onMouseEnter={handleMouseEnter} />
        </div>
      );
  }

  export default ArtikelRating;