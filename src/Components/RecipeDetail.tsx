import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../Api/Api';

interface Ingredient {
    name: string;
    measure: string;
}

interface Meal {
    idMeal: string;
    strMeal: string;
    strArea: string;
    strMealThumb: string;
    strInstructions: string;
    strYoutube: string;
    ingredients: Ingredient[]; 
}

const RecipeDetail = () => {
    const { idMeal } = useParams<{ idMeal: string }>(); 
    const [meal, setMeal] = useState<Meal | null>(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const data = await getMealById(idMeal); 
                const mealData = data.meals[0];

                
                const ingredients: Ingredient[] = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient = mealData[`strIngredient${i}`];
                    const measure = mealData[`strMeasure${i}`];
                    if (ingredient) {
                        ingredients.push({ name: ingredient, measure: measure || '' });
                    }
                }

               
                setMeal({
                    idMeal: mealData.idMeal,
                    strMeal: mealData.strMeal,
                    strArea: mealData.strArea,
                    strMealThumb: mealData.strMealThumb,
                    strInstructions: mealData.strInstructions,
                    strYoutube: mealData.strYoutube,
                    ingredients,
                });
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
            <p>Ingredients</p>
            <ul>
                {meal.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name} {ingredient.measure}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeDetail;
