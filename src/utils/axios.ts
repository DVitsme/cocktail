import { DrinkType } from '@/types/DrinkType';
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
    console.error((err as Error).message);
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
    console.error((err as Error).message);
  }
};

export const getAllDrinks = async () => {
  try {
    const allDrinks: { alcohlic?: DrinkType; 'non-alcohlic'?: DrinkType } = {};
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
    console.error((err as Error).message);
  }
};

export const getDrinkById = async (id: { id: number }) => {
  try {
    const getDrink = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    // console.log(getDrink.data);
    return getDrink.data.drinks[0];
  } catch (err) {
    console.error((err as Error).message);
  }
};
