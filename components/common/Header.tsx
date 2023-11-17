import React from 'react';
import Link from 'next/link';
const HeaderComponent = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <h1>맛지도</h1>
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
