import React from 'react'

const TradingCards = ({title,rating,details,img,compact}) => {
  return (
     <div
   
      className={`lg:rounded-[2rem] cursor-pointer p-1  bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)] lg:max-w-[300px] md:min-w-[200px] sm:rounded-[1rem] md:max-w-[200px]  sm:min-w-[150px] sm:max-w-[150px] lg:h-[200px] 
      `}
    >
      {/* ${compact ? ' lg:max-w-[45%] md:min-w-[200px] md:max-w-[200px]  sm:min-w-[150px] sm:max-w-[150px] lg:h-[500px] ' : 'w-full'}`
      } */}
    <div className='flex items-center lg:gap-4 p-2 sm:gap-1'>
        <img    src={img}      className="w-16 h-12 lg:w-24 lg:h-24 sm:rounded-[0.7rem] lg:rounded-[1.2rem] mt-4 object-cover sm:mt-0"/>
        <div>
            <h2 className='text-white font-semibold uppercase lg:text-[2rem] md:text-[16px] sm:text-[16px]'>{title}</h2>
            <p className='text-[#F3C118] lg:text-[18px] md:text-[10px] sm:text-[9px]'>
                  {rating} ★ Rating
            </p>
           
        </div>
    </div>
    <p className='text-[#F3C118] font-semibold lg:text-[17px] mb-1 leading-none sm:text-[10px] text-center'>
   {details}
    </p>
   </div>
  )
}

export default TradingCards