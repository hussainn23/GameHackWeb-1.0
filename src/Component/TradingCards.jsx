import React from 'react'

const TradingCards = ({title,rating,details,img,compact,related,allApps}) => {
  return (
  <div
  className={`lg:rounded-[2rem] sm:rounded-[1rem] cursor-pointer p-1 bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)]
    ${compact
      ? 'lg:max-w-[390px] md:min-w-[200px] md:max-w-[200px] sm:min-w-[155px] sm:max-w-[150px] lg:h-[260px]'
      :  allApps
      ? 'lg:h-[266px] sm:h-[135px]'
      : 'lg:h-[246px] sm:h-[135px]'
    }`}
>

      {/* ${compact ? ' lg:max-w-[45%] md:min-w-[200px] md:max-w-[200px]  sm:min-w-[150px] sm:max-w-[150px] lg:h-[500px] ' : 'w-full'}`
      } */}
    <div className='flex items-center lg:gap-4 p-2 sm:gap-2'>
        <img    src={img}      className="w-14 h-14 lg:w-26 lg:h-26 sm:rounded-[0.7rem] lg:rounded-[1.2rem] mt-4 object-cover sm:mt-0"/>
        <div>
            <h2 className='text-white font-semibold uppercase lg:text-[2rem] md:text-[16px] sm:text-[16px]'>{title}</h2>
           <p
  className={`text-[#F3C118]  md:text-[10px] 
  
    ${compact ? 'sm:text-[12px]  lg:text-[24px]' : ''}
     ${allApps ? 'sm:text-[12px] lg:text-[26px]':''}
     ${related ? 'sm:text-[12px] lg:text-[24px]':''}
  
  }`}
>
  {rating} ★ Rating
</p>

           
        </div>
    </div>
<p
 className={`text-[#F3C118]  font-semibold mb-1 leading-none text-center 
  ${allApps ? 'lg:text-[29px] sm:text-[0.73rem] lg:mt-2 ' : ''} 
  ${compact ? 'sm:text-[0.73rem] sm:pb-[3px] lg:text-[29px]' : ''}
    ${related ? 'sm:text-[0.73rem] lg:text-[24px]':''}
`}
>

   {details}
    </p>
   </div>
  )
}

export default TradingCards