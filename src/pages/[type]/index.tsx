import { useRouter } from 'next/router';
import React from 'react';

const DrinkCategory = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>DrinkCategory</h1>
    </div>
  );
};

export default DrinkCategory;
