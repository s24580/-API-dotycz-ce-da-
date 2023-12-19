import React, { useState, useEffect } from 'react';
import MealList from './components/MealList';
import MealDetails from './components/MealDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMeals();
  }, [searchTerm]);

  const fetchMeals = async () => {
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    if (searchTerm) {
      url += searchTerm;
    }
    const response = await fetch(url);
    const data = await response.json();
    if (data.meals) {
      setMeals(data.meals);
    } else {
      setMeals([]); // Ustaw pustą tablicę, gdy nie znaleziono dań
    }
  };
  

  const handleSelectMeal = async (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const response = await fetch(url);
    const data = await response.json();
    setSelectedMeal(data.meals[0]);
  };

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <MealList meals={meals} onSelectMeal={handleSelectMeal} />
      {selectedMeal && <MealDetails meal={selectedMeal} />}
    </div>
  );
};

export default App;
