import Link from 'next/link';
import React from 'react';

const HomeTile = ({
  getFirstDrink: { strDrinkThumb, strDrink, idDrink },
  type
}) => {
  return (
    <div>
      <img src={strDrinkThumb} alt="" />
      <h1>{strDrink}</h1>
      <div className="flex">
        <Link href={`/${type}/${idDrink}`}>View Drink</Link>
        <Link href={`/${type}`}>View All Drinks</Link>
      </div>
    </div>
  );
};

export default HomeTile;
