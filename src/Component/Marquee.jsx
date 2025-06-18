import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../components/ui/button'
export const Marquee = () => {
  return (
    <div className="  text-[8px] px-2 py-1 flex items-center justify-between overflow-hidden text-white lg:hidden">
      {/* `whitespace-nowrap` prevents line‑breaks */}
      <Button className='bg-[#6900E0] px-2 py-0 text-[12px]'>
         <Link
    to='/earningapps'
    state={{ category: 'COLOUR TRADING' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    COLOR TRADING APPS
  </Link>
      </Button>
      <Button className='bg-[#6900E0] px-2 py-0 text-[12px]'>
          <Link
    to='/earningapps'
    state={{ category: 'RUMMY GAMES' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    RUMMY APPS
  </Link>
      </Button>
<Button className='bg-[#6900E0] px-2 py-0 text-[12px]'>
   <Link
    to='/earningapps'
    state={{ category: 'YONO GAMES' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    YONO APPS
  </Link>
</Button>
 
    </div>
  );
};

