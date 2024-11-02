import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { searchMealByName } from '../Api/Api';
const MealSearch = () => {
    const [mealName, setMealName] = useState('');
    const [meals, setMeals] = useState([]);
    function debounce(func, timeout = 300) {
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
    return (_jsxs("div", { children: [_jsx("input", { type: "text", value: mealName, onChange: (e) => setMealName(e.target.value), placeholder: "Search for a meal..." }), _jsx("button", { onClick: processChange, children: "Search" }), meals && meals.map((meal) => (_jsxs("div", { children: [_jsx("h3", { children: meal.strMeal }), _jsx("p", { children: meal.strArea }), _jsx("img", { src: meal.strMealThumb, alt: meal.strMeal })] }, meal.idMeal)))] }));
};
export default MealSearch;
