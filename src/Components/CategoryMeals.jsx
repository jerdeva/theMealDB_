import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { filterMealsByCategory } from '../Api/Api';
import { useLocation } from 'react-router-dom';
import Pagination from './Pagination';
import SelectedRecipes from './SelectedRecipes';

const CategoryMeals = ({ setSelectedMeals }) => {
    const location = useLocation();
    const { category } = useParams();  
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
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        fetchMeals();
    }, [category, mealsPerPage]);

    const indexOfLastMeal = currentPage * mealsPerPage;
    const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
    const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

    return (
        <div>
            <h2>Meals in {category}</h2>
            <ul>
                {currentMeals && currentMeals.length > 0 ? (
                    currentMeals.map(meal => (
                        <li key={meal.idMeal}>
                            <Link
                                to={`/recipe/${meal.idMeal}`} 
                                state={{ from: location }}
                                cover={meal.strMealThumb}
                            >
                                <p>{meal.strMeal}</p>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No meals found in this category</p>
                )}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            <SelectedRecipes selectedMeals={currentMeals} setSelectedMeals={setSelectedMeals} />
            <Link to="/selected">
                <button>Go to Selected Recipes</button>
            </Link>
        </div>
    );
};

export default CategoryMeals;
