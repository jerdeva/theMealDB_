import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../Api/Api';
const RecipeDetail = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState(null);
    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const data = await getMealById(idMeal);
                const mealData = data.meals[0];
                const ingredients = [];
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
            }
            catch (error) {
                console.error('Error fetching meal details:', error);
            }
        };
        fetchMeal();
    }, [idMeal]);
    if (!meal) {
        return _jsx("p", { children: "Loading..." });
    }
    return (_jsxs("div", { children: [_jsx("h2", { children: meal.strMeal }), _jsx("p", { children: meal.strArea }), _jsx("img", { src: meal.strMealThumb, alt: meal.strMeal }), _jsx("p", { children: meal.strInstructions }), _jsx("a", { href: meal.strYoutube, children: "YouTube" }), _jsx("p", { children: "Ingredients" }), _jsx("ul", { children: meal.ingredients.map((ingredient, index) => (_jsxs("li", { children: [ingredient.name, " ", ingredient.measure] }, index))) })] }));
};
export default RecipeDetail;
