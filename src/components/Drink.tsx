import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AbvDrinkType } from '../types/DrinkType';

const Drink = ({ drink, type }: { drink: AbvDrinkType; type: string }) => {
  const { strDrink, strDrinkThumb, idDrink } = drink;
  return (
    <div>
      <Link href={`/${type}/${idDrink}`}>
        <h3>{strDrink}</h3>
        <Image
          src={strDrinkThumb}
          alt={`Image of ${strDrink}`}
          width={150}
          height={150}
        />
      </Link>
    </div>
  );
};

export default Drink;
