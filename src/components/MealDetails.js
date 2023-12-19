import React from 'react';

const MealDetails = ({ meal }) => {
  if (!meal) return null;

  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      {/* Wyświetl dodatkowe szczegóły dania */}
    </div>
  );
};

export default MealDetails;
