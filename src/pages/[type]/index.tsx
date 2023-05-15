import Drink from '@/components/Drink';
import { AllDrinks } from '@/utils/Context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const DrinkCategory = () => {
  const router = useRouter();
  const allDrinks = useContext(AllDrinks);
  const [drinks, setDrinks] = useState([]);
  const [drinkType, setDrinkType] = useState('');
  useEffect(() => {
    if (router.query) {
      const { type } = router.query;
      setDrinkType(type);
      const drinkData = async () => {
        const data = await allDrinks[type];
        console.log(router.query.type);
        setDrinks(data);
      };
      drinkData();
    }
    return () => {};
  }, [drinkType]);
  console.log(drinks);
  // console.log(allDrink s);
  return (
    <div>
      <Link href={'/'}>Back Home {'>'}</Link>
      <h1>Drink Category</h1>
      <div className="flex">
        {drinks
          ? drinks.map((drink) => (
              <Drink drink={drink} key={drink.idDrink} type={drinkType} />
            ))
          : 'Loading'}
      </div>
    </div>
  );
};

export default DrinkCategory;
