import React, { useEffect, useState } from 'react';
import { getMealCategories } from '../Api/Api';
import { MealCategories } from '../Components/MealCategories';
import MealSearch from './MealSearch';

const MainPge = () => {
    const [mealCategories, setMealCategories] = useState([]);  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getMealCategories();
                if (result && result.categories) { 
                    setMealCategories(result.categories); 
                } else {
                    setMealCategories([]);  
                }
            } catch (error) {
                console.error(error);
                setMealCategories([]);  
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {mealCategories.length === 0 ? (
                <p>Nothing</p> 
            ) : (
                    <>
                        <MealSearch/>
                    <MealCategories categor={mealCategories} />  
                </>
            )}
        </>
    );
}

export default MainPge;
