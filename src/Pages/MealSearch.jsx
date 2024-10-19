 import React, { useState } from 'react';
import { searchMealByName } from '../Api/Api';

const MealSearch = () => {
  const [mealName, setMealName] = useState('');
  const [meals, setMeals] = useState([]);

  function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

  const handleSearch = async () => {
    const data = await searchMealByName(mealName);
    setMeals(data.meals);
  };

  const processChange = debounce(() => handleSearch());

  return (
    <div>
      <input
        type="text"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        placeholder="Search for a meal..."
      />
      <button onClick={processChange}>Search</button>

      {meals && meals.map((meal) => (
        <div key={meal.idMeal}>
          <h3>{meal.strMeal}</h3>
          <p>{ meal.strArea}</p>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
      ))}
    </div>
  );
};

export default MealSearch;
