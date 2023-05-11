import axios from 'axios';
import { trace } from 'console';

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

export const getRandomCocktail = async () => {
  try {
    const res = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const getRandomMocktail = async () => {
  try {
    const res = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    );
    const randomNumber = Math.floor(Math.random() * res.data.drinks.length);
    const getSingleDrink = await res.data.drinks[randomNumber];
    return getSingleDrink;
  } catch (err) {
    console.error(err.message);
  }
};

export const getAllDrinks = async () => {
  try {
    const allDrinks = {};
    const alcoholicData = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    );
    allDrinks['alcohlic'] = alcoholicData.data.drinks;

    const nonAlcoholicData = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    );
    allDrinks['non-alcohlic'] = nonAlcoholicData.data.drinks;
    return allDrinks;
  } catch (err) {
    console.error(err.message);
  }
};
