import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../Api/Api';

const RecipeDetail = () => {
    const { idMeal } = useParams(); 
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const data = await getMealById(idMeal); 
                setMeal(data.meals[0]);
            } catch (error) {
                console.error('Error fetching meal details:', error);
            }
        };

        fetchMeal();
    }, [idMeal]);

    if (!meal) {
        return <p>Loading...</p>;
    }

    return (
        <div>
        <h2>{meal.strMeal}</h2>
        <p>{meal.strArea}</p>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
        <p>{meal.strInstructions}</p>
        <a href={meal.strYoutube}>YouTube</a>
        <p>Ingridiens</p>
        <ul>
          <li>{meal.strIngredient1} {meal.strMeasure1}</li>
          <li>{meal.strIngredient2} {meal.strMeasure2}</li>
          <li>{meal.strIngredient3} {meal.strMeasure3}</li>
          <li>{meal.strIngredient4} {meal.strMeasure4}</li>
          <li>{meal.strIngredient5} {meal.strMeasure5}</li>
          <li>{meal.strIngredient6} {meal.strMeasure6}</li>
          <li>{meal.strIngredient7} {meal.strMeasure7}</li>
          <li>{meal.strIngredient8} {meal.strMeasure8}</li>
          <li>{meal.strIngredient9} {meal.strMeasure9}</li>
          <li>{meal.strIngredient10} {meal.strMeasure10}</li>

        </ul>
        </div>
    );
};

export default RecipeDetail;
