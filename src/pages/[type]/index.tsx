import Drink from '@/components/Drink';
import { AbvDrinkType } from '@/types/DrinkType';
import { AllDrinks } from '@/utils/Context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const DrinkCategory = () => {
  const router = useRouter();
  const allDrinks = useContext(AllDrinks) as AbvDrinkType[];
  const [drinks, setDrinks] = useState<AbvDrinkType[]>([]);
  const [drinkType, setDrinkType] = useState('');

  useEffect(() => {
    if (router.query) {
      const { type } = router.query as { type: string };
      setDrinkType(type);
      const drinkData = async () => {
        // @ts-ignore
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
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-x-2 gap-y-4">
          {drinks
            ? drinks.map((drink) => (
                <Drink drink={drink} key={drink.idDrink} type={drinkType} />
              ))
            : 'Loading'}
        </div>
      </div>
    </div>
  );
};

export default DrinkCategory;
