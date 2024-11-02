import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import SelectedRecipes from '../Components/SelectedRecipes';
import { Link } from 'react-router-dom';
const SelectedRecipesPage = ({ setSelectedMeals }) => {
    const [selectedMeals, setSelectedMealsState] = useState([]);
    useEffect(() => {
        const storedSelectedMeals = JSON.parse(localStorage.getItem('selectedMeals') || '[]');
        setSelectedMealsState(storedSelectedMeals);
    }, []);
    return (_jsxs("div", { children: [_jsx("h1", { children: "Selected Recipes" }), _jsx(SelectedRecipes, { selectedMeals: selectedMeals, setSelectedMeals: setSelectedMeals }), _jsx(Link, { to: "/", children: _jsx("button", { children: "Back" }) })] }));
};
export default SelectedRecipesPage;
