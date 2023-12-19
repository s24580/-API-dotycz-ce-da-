import React from 'react';

const MealList = ({ meals, onSelectMeal }) => {
    if (meals.length === 0) {
      return <p>Nie znaleziono dań. Spróbuj wyszukać coś innego.</p>;
    }
  
    return (
      <div>
        {meals.map(meal => (
          <div key={meal.idMeal} onClick={() => onSelectMeal(meal.idMeal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    );
  };
  

export default MealList;
