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
      <div className="flex">
        <div className="cocktail">
          {/* <Image src={} alt={} width={}/> */}
          CockTails
        </div>
        <div className="mocktail">MockTails</div>
      </div>
    </div>
  );
}
