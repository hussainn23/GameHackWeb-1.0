import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Marquee } from '../Component/Marquee';
import TradingCards from '../Component/TradingCards';

const EarningApp = () => {
  const [tradingCards, setTradingCards] = useState([]);
  const location = useLocation();
  const category = location.state?.category || "Unknown";
 const navigate=useNavigate()
 
  useEffect(() => {
   const fetchAppsByCategory = async () => {
     try {
       const apkRef = collection(db, 'APK');
       const snapshot = await getDocs(apkRef);
 
       const allApps = snapshot.docs.map(doc => ({
         id: doc.id,
         ...doc.data(),
       }));
      console.log('all apps',allApps)
       const filteredApps = allApps.filter(app => app.Category === category);
 
       setTradingCards(filteredApps);
     } catch (error) {
       console.error('Error fetching category apps:', error);
     }
   };
 
   fetchAppsByCategory();
 }, [category]);
  useEffect(() => {
   if (tradingCards) {
     console.log('✅ Trading card App Data:', tradingCards);
   }
 }, [tradingCards]);
 
  return (
    <div>
      <Marquee />
      <div className='p-4'>
        <h1 className='text-[20px] font-stretch-ultra-expanded sm:pb-[9px] lg:py-6 leading-0 font-semibold lg:text-[2.7rem]'>{category}</h1>

        <div className='rounded-lg p-3 flex flex-col gap-1 bg-[#E3E3E3] mt-3 '>
          <h1 className='text-[20px] sm:py-2 lg:py-6 leading-0 text-[#7804A8] font-semibold lg:text-[2.4rem]'>TOP APPS</h1>
          <div className="flex py-1  gap-4 overflow-x-scroll no-scrollbar  snap-x snap-mandatory " id='no-scrollbar'>
          {tradingCards
  .filter(item => parseFloat(item.rating) > 4.5)
  .map((item, index) => (
    <div className='' key={item.id || index} onClick={() => navigate('/earningAppDetails', { state: { category: item.Category, id: item.id } })}>
      <TradingCards
        title={item.Name}
        img={item.Logo || item.MainImage}
        rating={item.rating}
        details={item.Description || 'No description'}
        compact={true}
        related={false}
      />
    </div>
))}

          </div>
        </div>

        <h1 className='text-[20px] leading-0 sm:py-2 lg:py-6 text-[#7804A8] font-semibold mt-3 lg:text-[2.4rem]'>ALL APPS</h1>
        <div className='grid lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 mt-4 '>
          {tradingCards.map((item, index) => (
            <div onClick={() => navigate('/earningAppDetails', { state: { category: item.Category ,id:item.id} })}>
            <TradingCards
              key={item.id || index}
              title={item.Name}
              img={item.Logo || item.MainImage}
              rating={item.rating }
              details={item.Description || 'No description'}
              compact={false}
              related={false}
              allApps={true}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EarningApp;
