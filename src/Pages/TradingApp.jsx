import React from 'react'
import { Marquee } from '../Component/Marquee'
import TradingCards from '../Component/TradingCards'

const TradingApp = () => {
  const TradingCard=[
    {title:"Lottery",rating:"4.7",
      img:"",
      details:"here goes some details of the app"
    },
    {title:"Lottery",rating:"4.7",
      img:"",
      details:"here goes some details of the app"
    },
   {title:"Lottery",rating:"4.7",
      img:"",
      details:"here goes some details of the app"
    },
   {title:"Lottery",rating:"4.7",
      img:"",
      details:"here goes some details of the app"
    },
     {title:"Lottery",rating:"4.7",
      img:"",
      details:"The Random Word Generator is a tool to help you create a list of random words. There are many reasons one might be interested in doing this,."
    },
    
  ]
  return (

    <div >
    <Marquee />
    <div className='p-4'>
      <h1 className='text-2xl font-semibold'>COLOUR TRADING</h1>
      <div className='rounded-lg p-1 bg-[#E3E3E3] mt-3 '>
        <h1 className='text-xl text-[#7804A8] font-semibold'>TOP APPS</h1>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar mt-2 snap-x snap-mandatory p-2">

            {TradingCard.map((Item,index)=>(
          <TradingCards title={Item.title} 
          img={Item.img}
            rating={Item.rating}
            details={Item.details}
             compact={true}
          />
        ))}
    
        </div>
      
      </div>
       <h1 className='text-xl text-[#7804A8] font-semibold mt-3'>ALL APPS</h1>
       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-4 '>
          {TradingCard.map((Item,index)=>(
          <TradingCards title={Item.title} 
          img={Item.img}
            rating={Item.rating}
            details={Item.details}
          />
        ))}
       </div>
    </div>
    
    </div>
  )
}

export default TradingApp