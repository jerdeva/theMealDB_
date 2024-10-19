import React, { useEffect, useState } from 'react';
import SelectedRecipes from '../Components/SelectedRecipes';
import { Link } from 'react-router-dom';

const SelectedRecipesPage = ({ setSelectedMeals }) => {
    const [selectedMeals, setSelectedMealsState] = useState([]);

    useEffect(() => {
        const storedSelectedMeals = JSON.parse(localStorage.getItem('selectedMeals')) || [];
        setSelectedMealsState(storedSelectedMeals); 
    }, []);

    return (
        <div>
            <h1>Selected Recipes</h1>
            <SelectedRecipes selectedMeals={selectedMeals} setSelectedMeals={setSelectedMeals} />
                        <Link to="/"> 
                <button>Back</button> 
            </Link>
        </div>
    );
};

export default SelectedRecipesPage;
