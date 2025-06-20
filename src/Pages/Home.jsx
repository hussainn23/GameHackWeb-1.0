// src/Pages/Home.jsx
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'
import HRatingCards from '../Component/HRatingCards'
import Loader from '../Component/Loader'
/** 
 * Preload an image URL, resolves when loaded (or on error).
 */
const preloadImage = src =>
  new Promise(resolve => {
    if (!src) return resolve()
    const img = new Image()
    img.onload = img.onerror = () => resolve()
    img.src = src
  })

const Home = () => {
  const [ratingData, setRatingData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAndPreload = async () => {
      // 1️⃣ fetch all APK docs
      const snap = await getDocs(collection(db, 'APK'))
      const all = snap.docs.map(d => ({ id: d.id, ...d.data() }))

      // 2️⃣ filter & sort
      const filtered = all
        .filter(
          apk =>
            apk.Visible === true &&
            [1, 2, 3].includes(Number(apk.MainScreenPosition))
        )
        .sort(
          (a, b) =>
            Number(a.MainScreenPosition) - Number(b.MainScreenPosition)
        )

      // 3️⃣ preload each logo + mainImage
      await Promise.all(
        filtered.flatMap(item => [
          preloadImage(item.Logo),
          preloadImage(item.MainImage)
        ])
      )

      // 4️⃣ now safe to render
      setRatingData(filtered)
    }

    fetchAndPreload().catch(console.error)
  }, [])

  // still loading?
  if (ratingData === null) {
    return <Loader/>  // or <Loader /> if you have one
  }

  const cardData = [
    {
      title: 'COLOUR TRADING',
      category: 'COLOUR TRADING',
      link: '/earningapps',
      bgGradient: 'bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)]'
    },
    {
      title: 'RUMMY GAMES',
      category: 'RUMMY GAMES',
      link: '/earningapps',
      bgGradient: 'bg-[linear-gradient(to_top_right,#7300D2,#6E00D9)]'
    },
    {
      title: 'YONO GAMES',
      category: 'YONO GAMES',
      link: '/earningapps',
      bgGradient: 'bg-[linear-gradient(to_top_right,#9500A8,#6E00D9)]'
    },
    {
      title: 'OTHER GAMES',
      category: 'OTHER GAMES',
      link: '/earningapps',
      bgGradient: 'bg-[linear-gradient(to_top_right,#7300D2,#6E00D9)]'
    }
  ]

  return (
    <div>
      {/* Hero video */}
      <div className="lg:h-[65vh] md:h-[30vh] sm:h-[25vh] bg-[#6ABFFF] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/lanscapevideo.mov"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="bg-[#2B0061] sm:min-h-[75vh]">
        {/* Top‑3 rating cards */}
        <div className="grid grid-cols-3 md:w-[65%] sm:w-[95%] lg:w-[75%] lg:gap-4 sm:gap-3 m-auto lg:p-6 relative top-16 sm:p-2">
          {ratingData.map(item => (
            <HRatingCards
              key={item.id}
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

        {/* Category links */}
        <div className="lg:mt-11 sm:mt-20 md:mt-20">
          <h1 className="sm:text-3xl lg:text-[5rem] lg:p-8 text-yellow-300 text-center font-semibold">
            TOP EARNING APPS
          </h1>
          <div className="grid grid-cols-2 gap-4 p-4 m-auto lg:w-[82%] sm:w-[100%]">
            {cardData.map((card, i) => (
              <div
                key={i}
                className={`
                  group lg:text-2xl ${card.bgGradient} cursor-pointer 
                  sm:rounded-[1.3rem] lg:rounded-4xl border border-white p-4 
                  text-white text-center text-xl font-semibold 
                  md:h-[150px] lg:h-[250px] sm:h-[110px] flex items-center justify-center
                  transition-all duration-300 ease-in-out transform 
                  hover:-rotate-1 hover:scale-[1.03]
                `}
                style={{ perspective: '1000px' }}
                onClick={() =>
                  navigate(card.link, {
                    state: { category: card.category }
                  })
                }
              >
                <div
                  className="transition-transform duration-300 ease-in-out transform group-hover:-rotate-x-6"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {card.title.split(' ').map((w, idx) => (
                    <span
                      key={idx}
                      className="lg:text-[3rem] font-semibold tracking-wide block"
                    >
                      {w}
                      <br />
                    </span>
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
