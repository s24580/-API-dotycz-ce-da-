import React, { useState } from 'react';

const RatingSystem = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            className={index <= rating ? 'on' : 'off'}
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default RatingSystem;
