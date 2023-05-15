import Loading from '@/components/Loading';
import { getDrinkById } from '@/utils/axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DrinkId = () => {
  const router = useRouter();
  const [drink, setDrink] = useState({});

  useEffect(() => {
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

  // Possible Probem if ID ever gets renamed here!!!
  if (!router.query.id) return <Loading />;
  // console.log(drinkId.strDrink);
  console.log(drink);
  return (
    <div>
      <Link href="/">Home {'>'}</Link>
      <img src={drink.strDrinkThumb} alt="" />
      <h1>{drink.strDrink}</h1>
      <p>type: {drink.strCategory}</p>
    </div>
  );
};

export default DrinkId;
