import React from 'react';
import CategoryMeals from './CategoryMeals';

interface MealCategoriesProps {
  categor: { idCategory: string; strCategory: string }[];
  setSelectedMeals?: (meals: any[]) => void; 
}

export const MealCategories: React.FC<MealCategoriesProps> = ({ categor, setSelectedMeals }) => {
  return (
    <div>
      <ul>
        {categor.map(categ => (
          <li key={categ.idCategory}>
            <CategoryMeals category={categ.strCategory} setSelectedMeals={setSelectedMeals} />
          </li>
        ))}
      </ul>
    </div>
  );
};
