import Loading from '@/components/Loading';
import { getDrinkById } from '@/utils/axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const DrinkId = () => {
  const router = useRouter();
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [amounts, setAmounts] = useState([]);

  useEffect(() => {
    const tempIngredientsArr = [];
    const tempAmountsArr = [];

    if (router.query.id) {
      const drinkData = async () => {
        const data = await getDrinkById(router.query.id);
        setDrink(data);
        if (await data) {
          for (let ingredient in data) {
            if (ingredient.includes('strIngredient')) {
              tempIngredientsArr.push({
                drink: data[ingredient]
              });
            }
          }
          for (let amount in data) {
            if (amount.includes('strMeasure')) {
              tempAmountsArr.push({
                drink: tempIngredientsArr[tempAmountsArr.length].drink,
                amount: data[amount]
              });
            }
          }
        }
        setIngredients(tempAmountsArr);
      };
      drinkData();
    }
    return () => {};
  }, [router]);
  // const { strDrink } = drink.value.drinks[0];

  // Possible Probem if ID-slug ever gets renamed here!!!
  if (!router.query.id) return <Loading />;
  return (
    <div className="container mx-auto">
      <div className="flex justify-between w-full">
        <div className="row1">
          <Link href="/" className="mr-4">
            Home
          </Link>
          <p
            className="inline-block cursor-pointer"
            onClick={() => router.back()}
          >
            Go Back
          </p>
        </div>
        <div className="row2">
          <Link href="/alcohlic" className="mr-4">
            All Cocktails
          </Link>
          <Link href="/non-alcohlic/">All Mocktails</Link>
        </div>
      </div>
      <Image
        src={drink.strDrinkThumb}
        alt={`image of ${drink.strDrink}`}
        width={300}
        height={500}
      />
      <h1>{drink.strDrink}</h1>
      <p>type: {drink.strCategory}</p>
      <p>steps: {drink.strInstructions}</p>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <span>{ingredient.drink}</span> {ingredient.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinkId;
