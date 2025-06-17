
import React from 'react'
import { Link } from 'react-router-dom'
import HRatingCards from '../Component/HRatingCards'

const Home = () => {
  const RatingData=[
   {
       title:"WINZO",
      rating:"4.8",
      position:"2",
      img:"/winzologo.jpg"
    },
     {
      title:"YONO 777",
      rating:"4.7",
      position:"1",img:"/YONOlogo.webp"
    },
    { title:"LOTTERY",
      rating:"4.9",
      position:"3",img:"/lotterylogo.webp"}
  ]
  const cardData = [
  {
    title: "COLOUR TRADNG",
    link: "/tradingapps",
    bgGradient: "bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)]",
  },
  {
    title: "RUMPY APPS",
    link: "/rumpyapps",
    bgGradient: "bg-[linear-gradient(to_top_right,#7300D2,#6E00D9)]",
  },
  {
    title: "YONO APPS",
    link: "/yonoapps",
    bgGradient: "bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)]",
  },
  {
    title: "OTHER GAMES",
    link: "/otherapps",
    bgGradient: "bg-[linear-gradient(to_top_right,#7300D2,#6E00D9)]",
  },
];

  return (
    <div 
    >
        <div className='lg:h-[45vh] md:h-[30vh] sm:h-[25vh] bg-[#6ABFFF] '>huh</div>
        <div className='bg-[#2B0061] sm:min-h-[75vh]'>
        <div className=" flex items-center justify-center  md:w-[65%] sm:w-full lg:w-[60%] gap-3 m-auto lg:p-6 relative top-16 sm:p-1 ">
        {RatingData.map((item, index) => (
          <HRatingCards
           
            key={index}
            title={item.title}
            rating={item.rating}
            position={item.position}
            img={item.img}
            highlight={item.position === '1'}
          />
        ))}
      </div>
        <div className='lg:mt-11 sm:mt-20 md:mt-20'>
            <h1 className='text-3xl text-yellow-300 text-center font-semibold'>TOP EARNING APPS</h1>
            <div className='grid grid-cols-2 gap-4  p-4 m-auto lg:w-[70%] sm:w-[100%]'>

  {cardData.map((card, index) => (
    <div
      key={index}
      className={`lg:text-2xl ${card.bgGradient} rounded-lg border-[1px] border-white p-4 text-white text-center text-xl font-semibold md:h-[150px] lg:h-[150px] md:flex lg:flex items-center justify-center`}
    >
      <Link to={card.link}>
        {card.title.split(" ").map((word, i) => (
          <React.Fragment key={i}>
            {word}
            <br />
          </React.Fragment>
        ))}
      </Link>
    </div>
  ))}


            </div>
        </div>
        </div>
    </div>
  )
}

export default Home