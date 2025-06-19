import React from 'react'

const TradingCards = ({title,rating,details,img,compact,related,allApps}) => {
  return (
  <div
  className={`lg:rounded-[2rem] sm:rounded-[1rem] cursor-pointer lg:p-2 sm:p-[3px] bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)]
    ${
      compact
        ? 'md:w-[200px] md:h-[130px] sm:h-[135px] sm:w-[43vw] lg:h-[260px] lg:w-[390px]'
      
        : allApps
        ? 'lg:h-[266px] sm:h-[135px] '
        : 'lg:h-[246px] sm:h-[135px]'
    }`}
>

    <div className='flex items-center lg:gap-4 p-2 sm:p-[2px] sm:pb-1  gap-1'>
        <img    src={img}      className="w-14 h-14 lg:w-26 lg:h-26 sm:rounded-[0.7rem] lg:rounded-[1.2rem] mt-2 object-cover sm:mt-0"/>
        <div>
            <h2 className='text-white  line-clamp-2 font-semibold uppercase lg:text-[1.5rem] md:text-[16px] 
            sm:text-[9px]'>{title}</h2>
           <p
  className={`text-[#F3C118]  md:text-[10px] 
  
    ${compact ? 'sm:text-[11px]  lg:text-[24px]' : ''}
     ${allApps ? 'sm:text-[11px] lg:text-[24px]':''}
     ${related ? 'sm:text-[11px] lg:text-[24px]':''}
  
  }`}
>
  {rating} ★ Rating
</p>

           
        </div>
    </div>
<p
 className={`text-[#F3C118]  font-semibold p-1 lg:pb-2  leading-none text-center 
  ${allApps ? 'lg:text-[29px] sm:text-[0.73rem] lg:mt-2 ' : ''} 
  ${compact ? 'sm:text-[0.73rem] sm:pb-[3px] lg:text-[29px]' : ''}
    ${related ? 'sm:text-[0.73rem] lg:text-[22px] ':''}
`}
>

   {details}
    </p>
   </div>
  )
}

export default TradingCards