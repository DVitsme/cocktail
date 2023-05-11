import { AllDrinks } from '@/utils/Context';
import {
  getAllDrinks,
  getRandomCocktail,
  getRandomMocktail
} from '@/utils/axios';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
  const allDrinks = useContext(AllDrinks);

  console.log(allDrinks);
  return (
    <div className="main">
      <h1>loading...</h1>
    </div>
  );
}
