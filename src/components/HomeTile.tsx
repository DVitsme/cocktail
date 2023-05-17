import Link from 'next/link';
import React from 'react';

const HomeTile = ({
  getFirstDrink: { strDrinkThumb, strDrink, idDrink },
  type
}) => {
  return (
    <div>
      <img src={strDrinkThumb} alt="" />
      <h1>{strDrink}</h1>
      <div className="flex">
        <Link href={`/${type}/${idDrink}`}>View Drink</Link>
        <Link href={`/${type}`}>View All Drinks</Link>
      </div>
    </div>
  );
};

export default HomeTile;

/*
      <ul>
        <li>
          {drink.strIngredient1} {drink.strMeasure1}
        </li>
        <li>
          {drink.strIngredient2} {drink.strMeasure2}
        </li>
        <li>
          {drink.strIngredient3} {drink.strMeasure3}
        </li>
        <li>
          {drink.strIngredient4} {drink.strMeasure4}
        </li>
        <li>
          {drink.strIngredient5} {drink.strMeasure5}
        </li>
        <li>
          {drink.strIngredient6} {drink.strMeasure6}
        </li>
        <li>
          {drink.strIngredient7} {drink.strMeasure7}
        </li>
        <li>
          {drink.strIngredient8} {drink.strMeasure8}
        </li>
        <li>
          {drink.strIngredient9} {drink.strMeasure9}
        </li>
        <li>
          {drink.strIngredient10} {drink.strMeasure10}
        </li>
        <li>
          {drink.strIngredient11} {drink.strMeasure11}
        </li>
        <li>
          {drink.strIngredient12} - {drink.strMeasure12}
        </li>
      </ul>
*/
