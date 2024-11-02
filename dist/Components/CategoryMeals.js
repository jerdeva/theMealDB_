import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { filterMealsByCategory } from '../Api/Api';
import Pagination from './Pagination';
import SelectedRecipes from './SelectedRecipes';
import { MainContainer } from './CategoryMeals.rtyled';
const CategoryMeals = ({ category, setSelectedMeals }) => {
    const [meals, setMeals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [mealsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const data = await filterMealsByCategory(category);
                setMeals(data.meals);
                setTotalPages(Math.ceil(data.meals.length / mealsPerPage));
            }
            catch (error) {
                console.error('Error fetching meals:', error);
            }
        };
        fetchMeals();
    }, [category, mealsPerPage]);
    const indexOfLastMeal = currentPage * mealsPerPage;
    const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
    const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);
    return (_jsxs("div", { children: [_jsxs("h2", { children: ["Meals in ", category] }), _jsxs(MainContainer, { children: [_jsx("div", { children: _jsx("ul", { children: currentMeals && currentMeals.length > 0 ? (currentMeals.map(meal => (_jsx("li", { children: _jsxs(Link, { to: `/recipe/${meal.idMeal}`, children: [_jsx("p", { children: meal.strMeal }), _jsx("img", { src: meal.strMealThumb, alt: meal.strMeal })] }) }, meal.idMeal)))) : (_jsx("p", { children: "No meals found in this category" })) }) }), _jsxs("div", { children: [_jsx(SelectedRecipes, { selectedMeals: currentMeals, setSelectedMeals: setSelectedMeals }), _jsx(Link, { to: "/selected", children: _jsx("button", { children: "Go to Selected Recipes" }) })] })] }), _jsx(Pagination, { currentPage: currentPage, totalPages: totalPages, onPageChange: setCurrentPage })] }));
};
export default CategoryMeals;
