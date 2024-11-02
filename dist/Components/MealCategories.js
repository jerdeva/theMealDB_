import { jsx as _jsx } from "react/jsx-runtime";
import CategoryMeals from './CategoryMeals';
export const MealCategories = ({ categor, setSelectedMeals }) => {
    return (_jsx("div", { children: _jsx("ul", { children: categor.map(categ => (_jsx("li", { children: _jsx(CategoryMeals, { category: categ.strCategory, setSelectedMeals: setSelectedMeals }) }, categ.idCategory))) }) }));
};
