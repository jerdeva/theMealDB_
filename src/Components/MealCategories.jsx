import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MealCategories = ({ categor }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {categor.map(categ => (
          <li key={categ.idCategory}>
            <Link
              to={`/category/${categ.strCategory}`}
              state={{ from: location }}
              cover={categ.idCategory} 
            >
                    <p>{categ.strCategory}</p> 
                    <img src={categ.strCategoryThumb} alt={categ.strCategory} />

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
