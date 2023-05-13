import { getDrinkById } from '@/utils/axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DrinkId = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [drink, setDrink] = useState({});
  useEffect(() => {
    router.query && setDrink(getDrinkById(router.query.id));

    return () => {};
  }, [router]);
  // const { strDrink } = drink.value.drinks[0];

  console.log(drink);
  return (
    <div>
      <h1>{'strDrink'}</h1>
    </div>
  );
};

export default DrinkId;
