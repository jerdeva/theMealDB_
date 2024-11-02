import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const SelectedRecipes = ({ selectedMeals, setSelectedMeals }) => {
    const [selectedRecipeIds, setSelectedRecipeIds] = useState([]);
    useEffect(() => {
        const storedSelectedMeals = JSON.parse(localStorage.getItem('selectedMeals') || '[]');
        setSelectedRecipeIds(storedSelectedMeals.map(meal => meal.idMeal));
    }, []);
    const handleSelectRecipe = (id) => {
        setSelectedRecipeIds((prevIds) => prevIds.includes(id)
            ? prevIds.filter((recipeId) => recipeId !== id)
            : [...prevIds, id]);
    };
    const combinedIngredients = selectedMeals.reduce((acc, meal) => {
        if (selectedRecipeIds.includes(meal.idMeal)) {
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                if (ingredient) {
                    acc[ingredient] = acc[ingredient] ? `${acc[ingredient]}, ${measure}` : measure || '';
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
    return (_jsxs("div", { children: [_jsx("h2", { children: "Selected Recipes" }), _jsx("ul", { children: selectedMeals.map((meal) => (_jsx("li", { children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: selectedRecipeIds.includes(meal.idMeal), onChange: () => handleSelectRecipe(meal.idMeal) }), meal.strMeal] }) }, meal.idMeal))) }), _jsx("h3", { children: "Combined Ingredients" }), _jsx("ul", { children: Object.entries(combinedIngredients).map(([ingredient, quantity]) => (_jsxs("li", { children: [ingredient, ": ", quantity] }, ingredient))) }), _jsx("button", { onClick: handleFinalizeSelection, children: "Finalize Selection" })] }));
};
export default SelectedRecipes;
