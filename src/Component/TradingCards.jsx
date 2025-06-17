import React from 'react'

const TradingCards = ({title,rating,details,img,compact}) => {
  return (
     <div
      className={`rounded-lg p-1 bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)] 
        ${compact ? 'lg:min-w-[200px] lg:max-w-[200px] md:min-w-[200px] md:max-w-[200px]  sm:min-w-[150px] sm:max-w-[150px] h-[150px] ' : 'w-full'}`
      }
    >
    <div className='flex items-center gap-4 p-2'>
        <img    src={img}      className="w-16 h-12 rounded-lg mt-4 object-contain"/>
        <div>
            <h2 className='text-white font-semibold uppercase lg:text-xl md:text-[16px] sm:text-[14px]'>{title}</h2>
            <p className='text-[#F3C118] text-[12px] md:text-[10px] sm:text-[9px]'>
                  {rating} ★ Rating
            </p>
           
        </div>
    </div>
    <p className='text-[#F3C118] lg:text-[11px] sm:text-[8px] text-center'>{details}</p>
   </div>
  )
}

export default TradingCards