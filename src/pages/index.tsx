import HomeTile from '@/components/HomeTile';
import { DrinkType } from '@/types/DrinkType';
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
  const getFirstDrink = (listOfDrinks: DrinkType[]) => {
    // console.log(listOfDrinks);
    if (listOfDrinks) {
      const firstDrink = listOfDrinks[0];
      return firstDrink;
    } else {
      return [];
    }
  };
  return (
    <div className="main">
      <div className="flex">
        <div className="cocktail">
          CockTails
          <HomeTile
            // @ts-ignore
            getFirstDrink={getFirstDrink(allDrinks['alcohlic'])}
            type={'alcohlic'}
          />
        </div>
        <div className="mocktail">
          MockTails
          <HomeTile
            // @ts-ignore
            getFirstDrink={getFirstDrink(allDrinks['non-alcohlic'])}
            type={'non-alcohlic'}
          />
        </div>
      </div>
    </div>
  );
}
