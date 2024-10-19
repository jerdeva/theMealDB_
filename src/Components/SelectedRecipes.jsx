import React, { useState, useEffect } from 'react';

const SelectedRecipes = ({ selectedMeals, setSelectedMeals }) => {
    const [selectedRecipeIds, setSelectedRecipeIds] = useState([]);

    useEffect(() => {
        const storedSelectedMeals = JSON.parse(localStorage.getItem('selectedMeals')) || [];
        setSelectedRecipeIds(storedSelectedMeals.map(meal => meal.idMeal)); 
    }, []);

    const handleSelectRecipe = (id) => {
        setSelectedRecipeIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((recipeId) => recipeId !== id)
                : [...prevIds, id]
        );
    };

    const combinedIngredients = selectedMeals.reduce((acc, meal) => {
        if (selectedRecipeIds.includes(meal.idMeal)) {
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                if (ingredient) {
                    acc[ingredient] = (acc[ingredient] || 0) + (measure ? `, ${measure}` : '');
                }
            }
        }
        return acc;
    }, {});

    const handleFinalizeSelection = () => {
        const finalizedMeals = selectedMeals.filter(meal => selectedRecipeIds.includes(meal.idMeal));
        
        setSelectedMeals(finalizedMeals);
        
        localStorage.setItem('selectedMeals', JSON.stringify(finalizedMeals));
    };

    return (
        <div>
            <h2>Selected Recipes</h2>
            <ul>
                {selectedMeals.map((meal) => (
                    <li key={meal.idMeal}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedRecipeIds.includes(meal.idMeal)}
                                onChange={() => handleSelectRecipe(meal.idMeal)}
                            />
                            {meal.strMeal} 
                        </label>
                    </li>
                ))}
            </ul>

            <h3>Combined Ingredients</h3>
            <ul>
                {Object.entries(combinedIngredients).map(([ingredient, quantity]) => (
                    <li key={ingredient}>
                        {ingredient}: {quantity}
                    </li>
                ))}
            </ul>

            <button onClick={handleFinalizeSelection}>Finalize Selection</button> 
        </div>
    );
};

export default SelectedRecipes;
