import axios from "axios";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Search meals by name
export const searchMealByName = async (mealName) => {
  const response = await axios.get(`${API_BASE_URL}/search.php`, {
    params: { s: mealName },
  });
  return response.data;
};

// Get meals by the first letter
export const getMealsByFirstLetter = async (letter) => {
  const response = await axios.get(`${API_BASE_URL}/search.php`, {
    params: { f: letter },
  });
  return response.data;
};

// Get meal details by ID
export const getMealById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/lookup.php`, {
    params: { i: id },
  });
  return response.data;
};

// Get a random meal
export const getRandomMeal = async () => {
  const response = await axios.get(`${API_BASE_URL}/random.php`);
  return response.data;
};

// Get all meal categories
export const getMealCategories = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/categories.php`, {
      params: { i: id },
    });
  return response.data;
};

// Filter meals by category
export const filterMealsByCategory = async (category) => {
  const response = await axios.get(`${API_BASE_URL}/filter.php`, {
    params: { c: category },
  });
  return response.data;
};

// Filter meals by ingredient
export const filterMealsByIngredient = async (ingredient) => {
  const response = await axios.get(`${API_BASE_URL}/filter.php`, {
    params: { i: ingredient },
  });
  return response.data;
};

// Filter meals by area
export const filterMealsByArea = async (area) => {
  const response = await axios.get(`${API_BASE_URL}/filter.php`, {
    params: { a: area },
  });
  return response.data;
};
