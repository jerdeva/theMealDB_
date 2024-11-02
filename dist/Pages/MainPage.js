import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
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
                }
                else {
                    setMealCategories([]);
                }
            }
            catch (error) {
                console.error(error);
                setMealCategories([]);
            }
        };
        fetchData();
    }, []);
    return (_jsx(_Fragment, { children: mealCategories.length === 0 ? (_jsx("p", { children: "Nothing" })) : (_jsxs(_Fragment, { children: [_jsx(MealSearch, {}), _jsx(MealCategories, { categor: mealCategories })] })) }));
};
export default MainPge;
