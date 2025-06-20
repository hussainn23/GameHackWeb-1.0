import React from 'react'
import {useState} from 'react'
const TradingCards = ({title,rating,details,img,compact,related,allApps}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
  <div
  className={`lg:rounded-[2rem] sm:rounded-[1rem] cursor-pointer lg:p-2 sm:p-[3px] bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)]
    ${
      compact
        ? 'md:w-[200px] md:h-[130px] sm:h-[135px] sm:w-[43.56vw] lg:h-[260px] lg:w-[390px]'
      
        : allApps
        ? 'lg:h-[266px] sm:h-[135px] '
        : 'lg:h-[246px] sm:h-[135px]'
    }`}
>

    <div className='flex items-center lg:gap-4 p-2 sm:p-[2px] sm:pb-1  gap-1'>
    {!imgLoaded && (
          <div className="absolute w-14 h-14 lg:w-26 lg:h-26 rounded-[1rem] bg-gray-300 animate-pulse flex items-center justify-center">
            <div className="loader border-t-4 border-white border-solid rounded-full w-5 h-5 animate-spin"></div>
          </div>
        )}
        <img
          src={img}
          onLoad={() => setImgLoaded(true)}
          className={`w-14 h-14 lg:w-26 lg:h-26 sm:rounded-[0.7rem] lg:rounded-[1.2rem] mt-2 object-cover sm:mt-0 transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          alt="App"
        />
        <div>
            <h2 className='text-white  line-clamp-2 font-semibold uppercase lg:text-[1.5rem] md:text-[16px] 
            sm:text-[10.09px]'>{title}</h2>
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