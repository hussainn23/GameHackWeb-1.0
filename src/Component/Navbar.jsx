
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='z-10  sm:h-[5vh] sm:p-2 lg:h-[10vh] left-0 w-[100%] bg-[#2B0061] text-white p-4 flex items-center justify-between  '>
      <h1 className='text-[#FFE300] lg:text-[1.3rem] font-semibold sm:text-[1rem]'>REAL RUMPY APPS</h1>
     <div className='items-center text-[1.3rem] justify-between w-[50%] lg:flex sm:hidden md:hidden'>
  <Link
    to='/'
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-purple-300 hover:underline underline-offset-4'
  >
    HOME
  </Link>
  <Link
    to='/earningapps'
    state={{ category: 'COLOUR TRADING' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-purple-300 hover:underline underline-offset-4'
  >
    COLOR TRADING APPS
  </Link>
  <Link
    to='/earningapps'
    state={{ category: 'RUMPY GAMES' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-purple-300 hover:underline underline-offset-4'
  >
    RUMPY APPS
  </Link>
  <Link
    to='/earningapps'
    state={{ category: 'YONO GAMES' }}
    className='transition duration-300 ease-in-out hover:scale-105 hover:text-purple-300 hover:underline underline-offset-4'
  >
    YONO APPS
  </Link>
</div>

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
          <DropdownMenuItem className='lg:p-4 sm:p-2'> <Link to='/earningapps' state={{ category: 'RUMPY GAMES' }}>
             RUMPY APPS
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
  )
}

export default Navbar