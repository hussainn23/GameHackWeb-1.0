import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../components/ui/button'
export const Marquee = () => {
  return (
    <div className="  text-[14px] px-2 py-1 flex items-center justify-between overflow-hidden text-white lg:hidden">
      {/* `whitespace-nowrap` prevents line‑breaks */}
      <Button className='bg-[#6900E0] p-2'>
         <Link
    to='/earningapps'
    state={{ category: 'COLOUR TRADING' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    COLOR TRADING APPS
  </Link>
      </Button>
      <Button className='bg-[#6900E0] p-2'>
          <Link
    to='/earningapps'
    state={{ category: 'RUMPY GAMES' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    RUMPY APPS
  </Link>
      </Button>
<Button className='bg-[#6900E0] p-2'>
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

