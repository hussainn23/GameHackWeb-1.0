
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, useLocation } from 'react-router-dom'
import Search from './Search';

const Navbar = () => {

  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
     <div
      className={`z-10 sm:h-[5vh] sm:p-2 lg:h-[10vh] left-0 w-[100%] p-4 flex items-center justify-between 
        ${isHome ? 'bg-[#2B0061] text-white' : 'lg:bg-[#2B0061] lg:text-white sm:bg-white '}`}
    >
 <h1
      className={`font-semibold sm:leading-1 lg:text-[1.3rem] sm:text-[1.1rem] 
        ${isHome ? 'text-yellow-400' : 'lg:text-[#FFE300] sm:text-black'}`}
    >REAL RUMMY APPS</h1>
     <div className='items-center text-[1.3rem] justify-between w-[50%] lg:flex sm:hidden md:hidden'>
  <Link
    to='/'
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    HOME
  </Link>
  <Link
    to='/earningapps'
    state={{ category: 'COLOUR TRADING' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    COLOR TRADING APPS
  </Link>
  <Link
    to='/earningapps'
    state={{ category: 'RUMMY GAMES' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    RUMMY APPS
  </Link>
  <Link
    to='/earningapps'
    state={{ category: 'YONO GAMES' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#E3E3E3] hover:underline underline-offset-4'
  >
    YONO APPS
  </Link>
</div>
<div className='flex items-center sm:gap-2 lg:gap-12'>
  <Search />
       <DropdownMenu >
        <DropdownMenuTrigger ><Menu className='cursor-pointer'/></DropdownMenuTrigger>
        <DropdownMenuContent className=' lg:w-[70vw] sm:w-[50vw] overflow-y-auto  rounded-md shadow-md p-2 bg-white'>
          <DropdownMenuItem className='lg:p-4 sm:p-2'>  <Link to='/'>
             HOME
        </Link></DropdownMenuItem>
   <DropdownMenuSeparator/>

          <DropdownMenuItem className='lg:p-4 sm:p-2'>
             <Link to='/earningapps' state={{ category: 'COLOUR TRADING' }}>
             COLOR TRADING APPS
        </Link>
          </DropdownMenuItem>
     <DropdownMenuSeparator/>
          <DropdownMenuItem className='lg:p-4 sm:p-2'> <Link to='/earningapps' state={{ category: 'RUMMY GAMES' }}>
             RUMMY APPS
        </Link></DropdownMenuItem>
        <DropdownMenuSeparator />
          <DropdownMenuItem className='lg:p-4 sm:p-2'> <Link to='/earningapps' state={{ category: 'YONO GAMES' }}>
             YONO APPS
        </Link></DropdownMenuItem>
        <DropdownMenuSeparator />
         <DropdownMenuItem className='lg:p-4 sm:p-2'> <Link to='/aboutus'>
             ABOUT US
        </Link></DropdownMenuItem>
          <DropdownMenuSeparator />
         <DropdownMenuItem className='lg:p-4 sm:p-2'> <Link to='/contactus'>
             CONTACT US
        </Link></DropdownMenuItem>
          <DropdownMenuSeparator />
         <DropdownMenuItem className='lg:p-4 sm:p-2'> <Link to='/termsconditions'>
          TERMS & CONDITIONS
        </Link></DropdownMenuItem>
        <DropdownMenuSeparator />
         <DropdownMenuItem className='lg:p-4 sm:p-2'> <Link to='/privacypolicy'>
             PRIVACY & POLICY
        </Link></DropdownMenuItem>
        <DropdownMenuSeparator />
        </DropdownMenuContent>
       </DropdownMenu>
</div>


    </div>
  )
}

export default Navbar