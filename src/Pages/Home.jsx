
import {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HRatingCards from '../Component/HRatingCards'
import React from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'; // or your correct db path

const Home = () => {
 const [RatingData, setRatingData] = useState([]);
 const navigate=useNavigate()
  useEffect(() => {
    const fetchVisibleApps = async () => {
      try {
        const apkRef = collection(db, "APK");

        const snapshot = await getDocs(apkRef);
        const allApps = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filtered = allApps
          .filter(
            (apk) =>
              apk.Visible === true &&
              [1, 2, 3].includes(Number(apk.MainScreenPosition))
          )
          .sort((a, b) => Number(a.MainScreenPosition) - Number(b.MainScreenPosition)); // Sort by position

        setRatingData(filtered);
      } catch (err) {
        console.error("Error fetching visible apps:", err);
      }
    };

    fetchVisibleApps();
  }, []);
  const cardData = [
  {
    title: "COLOUR TRADING",
    category:"COLOUR TRADING",
    link: "/earningapps",
    bgGradient: "bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)]",
  },
  {
    title: "RUMMY GAMES",
    category:"RUMMY GAMES",
    link: "/earningapps",
    bgGradient: "bg-[linear-gradient(to_top_right,#7300D2,#6E00D9)]",
  },
  {
    title: "YONO GAMES",
    category:"YONO GAMES",
    link: "/earningapps",
    bgGradient: "bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)]",
  },
  {
    title: "OTHER GAMES",
    category:"OTHER GAMES",
    link: "/earningapps",
    bgGradient: "bg-[linear-gradient(to_top_right,#7300D2,#6E00D9)]",
  },
];
// 

  return (
    <div 
    >
       <div className='lg:h-[65vh] md:h-[30vh] sm:h-[25vh] bg-[#6ABFFF] overflow-hidden'>
  <video
    className='w-full h-full object-cover'
    src='/lanscapevideo.mov'
    autoPlay
    loop
    muted
    playsInline
  />
</div>

        <div className='bg-[#2B0061] sm:min-h-[75vh]'>
           <div className=" grid grid-cols-3  md:w-[65%] sm:w-[95%] lg:w-[75%] lg:gap-4 sm:gap-3 m-auto lg:p-6 relative top-16 sm:p-2 ">
        {RatingData.map((item, index) => (
          <HRatingCards
          id={item.id}
          title={item.Name}
          rating={item.rating}
          position={item.MainScreenPosition}
          img={item.Logo || item.MainImage}
          Category={item.Category}
         highlight={item.MainScreenPosition === '1'}
           second={item.MainScreenPosition === '2'}
            third={item.MainScreenPosition === '3'}
        />
        ))}
      </div>
        <div className='lg:mt-11 sm:mt-20 md:mt-20'>
            <h1 className='sm:text-3xl lg:text-[5rem] lg:p-8 text-yellow-300 text-center font-semibold'>TOP EARNING APPS</h1>
            <div className='grid grid-cols-2 gap-4  p-4 m-auto lg:w-[82%] sm:w-[100%]'>

  {cardData.map((card, index) => (
 <div
  key={index}
  className={`group lg:text-2xl ${card.bgGradient} cursor-pointer sm:rounded-[1.3rem] lg:rounded-4xl 
              border-[1px] border-white p-4 text-white text-center text-xl font-semibold 
              md:h-[150px] lg:h-[250px] sm:h-[110px] md:flex lg:flex items-center justify-center
               transition-all duration-300 ease-in-out transform hover:-rotate-1 hover:scale-[1.03]`}
  style={{ perspective: '1000px' }}
  onClick={() => navigate(card.link, { state: { category: card.category } })}
>
  <div
    className="w-full h-full  lg:mt-[5rem] sm:mt-2 transition-transform duration-300 ease-in-out transform group-hover:-rotate-x-6 "
    style={{ transformStyle: 'preserve-3d' }}
  >

      
      {card.title.split(" ").map((word, i) => (
  <React.Fragment key={i}>
    <span className="lg:text-[3rem]  font-semibold tracking-wide text-center block">
      {word}
      <br/>
    </span>
  </React.Fragment>
))}

    </div>
    </div>
  ))}


            </div>
        </div>
        </div>
    </div>
  )
}

export default Home