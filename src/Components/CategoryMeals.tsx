import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { filterMealsByCategory } from '../Api/Api';
import Pagination from './Pagination';
import SelectedRecipes from './SelectedRecipes';
import { MainContainer, MainTitle, UlContainer} from './CategoryMeals.styled';
import { Meal } from './types';



const CategoryMeals = ({ category, setSelectedMeals }) => {
    const [meals, setMeals] = useState<Meal[]>([]);
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
            <MainTitle>Meals in {category}</MainTitle>
            <MainContainer>
                <div>
                    <UlContainer>
                        {currentMeals && currentMeals.length > 0 ? (
                            currentMeals.map(meal => (
                                <li key={meal.idMeal}>
                                    <Link to={`/recipe/${meal.idMeal}`}>
                                        <p>{meal.strMeal}</p>
                                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <p>No meals found in this category</p>
                        )}
                    </UlContainer>
                </div>
                <div>
                    <SelectedRecipes selectedMeals={currentMeals} setSelectedMeals={setSelectedMeals} />
                    <Link to="/selected">
                        <button>Go to Selected Recipes</button>
                    </Link>
                </div>
            </MainContainer>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default CategoryMeals;
