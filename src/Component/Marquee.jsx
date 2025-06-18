import React from 'react'
import { Link } from 'react-router-dom'
export const Marquee = () => {
  return (
    <div className="bg-[#6900E0]  text-[14px] px-2 py-1 flex items-center justify-between overflow-hidden text-white lg:hidden">
      {/* `whitespace-nowrap` prevents line‑breaks */}
    <Link
    to='/earningapps'
    state={{ category: 'COLOUR TRADING' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    COLOR TRADING APPS
  </Link>
  <Link
    to='/earningapps'
    state={{ category: 'RUMPY GAMES' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    RUMPY APPS
  </Link>
  <Link
    to='/earningapps'
    state={{ category: 'YONO GAMES' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    YONO APPS
  </Link>
    </div>
  );
};

