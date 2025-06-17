
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
    <div className='z-10   h-[10vh] left-0 w-[100%] bg-[#2B0061] text-white p-4 flex items-center justify-between  '>
      <h1 className='text-[#FFE300] font-semibold'>REAL RUMPY APPS</h1>
      <div className=' items-center justify-between w-[50%] lg:flex sm:hidden md:hidden '>
        <Link to='/'>
             HOME
        </Link>
         <Link to='/earningapps' state={{ category: 'COLOUR TRADING' }}>
             COLOR TRADING APPS
        </Link>
         <Link to='/earningapps' state={{ category: 'RUMPY GAMES' }}>
             RUMPY APPS
        </Link>
         <Link to='/earningapps' state={{ category: 'YONO GAMES' }}>
             YONO APPS
        </Link>

      </div>
       <DropdownMenu >
        <DropdownMenuTrigger ><Menu className='cursor-pointer'/></DropdownMenuTrigger>
        <DropdownMenuContent className=' w-[70vw]  overflow-y-auto  rounded-md shadow-md p-2 bg-white'>
          <DropdownMenuItem className='p-4'>  <Link to='/'>
             HOME
        </Link></DropdownMenuItem>
   <DropdownMenuSeparator/>

          <DropdownMenuItem className='p-4'>
             <Link to='/earningapps' state={{ category: 'COLOUR TRADING' }}>
             COLOR TRADING APPS
        </Link>
          </DropdownMenuItem>
     <DropdownMenuSeparator/>
          <DropdownMenuItem className='p-4'> <Link to='/earningapps' state={{ category: 'RUMPY GAMES' }}>
             RUMPY APPS
        </Link></DropdownMenuItem>
        <DropdownMenuSeparator />
          <DropdownMenuItem className='p-4'> <Link to='/earningapps' state={{ category: 'YONO GAMES' }}>
             YONO APPS
        </Link></DropdownMenuItem>
        <DropdownMenuSeparator />
         <DropdownMenuItem className='p-4'> <Link to='/aboutus'>
             ABOUT US
        </Link></DropdownMenuItem>
          <DropdownMenuSeparator />
         <DropdownMenuItem className='p-4'> <Link to='/contactus'>
             CONTACT US
        </Link></DropdownMenuItem>
          <DropdownMenuSeparator />
         <DropdownMenuItem className='p-4'> <Link to='/termsconditions'>
          TERMS & CONDITIONS
        </Link></DropdownMenuItem>
        <DropdownMenuSeparator />
         <DropdownMenuItem className='p-4'> <Link to='/privacypolicy'>
             PRIVACY & POLICY
        </Link></DropdownMenuItem>
        <DropdownMenuSeparator />
        </DropdownMenuContent>
       </DropdownMenu>

    </div>
  )
}

export default Navbar