import "./App.css";
import Mainpage from "./Pages/MainPage";
import CategoryMeals from "./Components/CategoryMeals";
import RecipeDetail from "./Components/RecipeDetail";
import SelectedRecipesPage from "./Pages/SelectedRecipesPage";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { useState } from "react";

function App() {
  const [selectedMeals, setSelectedMeals] = useState([]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route
            path="/category/:category"
            element={<CategoryMeals setSelectedMeals={setSelectedMeals} />}
          />
          <Route path="/recipe/:idMeal" element={<RecipeDetail />} />
          <Route
            path="/selected"
            element={
              <SelectedRecipesPage
                selectedMeals={selectedMeals}
                setSelectedMeals={setSelectedMeals}
              />
            } 
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
