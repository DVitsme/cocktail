import HomeTile from '@/components/HomeTile';
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
  const getFirstDrink = (listOfDrinks) => {
    // console.log(listOfDrinks);
    if (listOfDrinks) {
      const firstDrink = listOfDrinks[0];
      return firstDrink;
    } else {
      return [];
    }
  };
  console.log(getFirstDrink(allDrinks['alcohlic']));
  return (
    <div className="main">
      <div className="flex">
        <div className="cocktail">
          CockTails
          <HomeTile
            getFirstDrink={getFirstDrink(allDrinks['alcohlic'])}
            type={'alcohlic'}
          />
        </div>
        <div className="mocktail">
          MockTails
          <HomeTile
            getFirstDrink={getFirstDrink(allDrinks['non-alcohlic'])}
            type={'non-alcohlic'}
          />
        </div>
      </div>
    </div>
  );
}
