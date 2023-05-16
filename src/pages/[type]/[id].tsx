import Loading from '@/components/Loading';
import { getDrinkById } from '@/utils/axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DrinkId = () => {
  const router = useRouter();
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [amounts, setAmounts] = useState([]);

  useEffect(() => {
    const tempIngredientsArr = [];
    if (router.query.id) {
      const drinkData = async () => {
        const data = await getDrinkById(router.query.id);
        setDrink(data);
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
      <img src={drink.strDrinkThumb} alt="" />
      <h1>{drink.strDrink}</h1>
      <p>type: {drink.strCategory}</p>
      <p>steps: {drink.strInstructions}</p>
      <ul>
        <li>{drink.strIngredient1}</li>
        <li>{drink.strIngredient2}</li>
        <li>{drink.strIngredient3}</li>
        <li>{drink.strIngredient4}</li>
        <li>{drink.strIngredient5}</li>
        <li>{drink.strIngredient6}</li>
        <li>{drink.strIngredient7}</li>
        <li>{drink.strIngredient8}</li>
        <li>{drink.strIngredient9}</li>
        <li>{drink.strIngredient10}</li>
        <li>{drink.strIngredient11}</li>
        <li>{drink.strIngredient12}</li>
      </ul>
    </div>
  );
};

export default DrinkId;
