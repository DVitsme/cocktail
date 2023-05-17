import '@/styles/globals.css';
import { DrinkType } from '@/types/DrinkType';
import { AllDrinks } from '@/utils/Context';
import { getAllDrinks } from '@/utils/axios';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [drinks, setDrinks] = useState({});
  useEffect(() => {
    const getDrink = async () => {
      const data = (await getAllDrinks()) as DrinkType[];
      setDrinks(data);
    };
    getDrink();
    return () => {};
  }, []);
  return (
    <AllDrinks.Provider value={drinks}>
      <Component {...pageProps} />
    </AllDrinks.Provider>
  );
}
