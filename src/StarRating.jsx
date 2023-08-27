import React from 'react';

const StarRating = ({ rating, onMouseEnter }) => {
  const handleStarHover = (newRating) => {
    onMouseEnter(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? 'star-filled' : 'star-empty';
      stars.push(
        <span
          key={i}
          className={starClass}
          onClick={() => handleStarHover(i)}
        />
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
