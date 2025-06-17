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
        <h1 className='text-2xl font-semibold'>{category}</h1>

        <div className='rounded-lg p-1 bg-[#E3E3E3] mt-3 '>
          <h1 className='text-xl text-[#7804A8] font-semibold'>TOP APPS</h1>
          <div className="flex gap-4 overflow-x-scroll no-scrollbar mt-2 snap-x snap-mandatory p-2">
            {tradingCards.map((item, index) => (
               <div onClick={() => navigate('/earningAppDetails', { state: { category: item.Category ,id:item.id} })}>
              <TradingCards
                key={item.id || index}
                title={item.Name}
                img={item.Logo || item.MainImage}
                rating={item.rating || "4.7"}
                details={item.Description || 'No description'}
                compact={true}
              />
              </div>
            ))}
          </div>
        </div>

        <h1 className='text-xl text-[#7804A8] font-semibold mt-3'>ALL APPS</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-4 '>
          {tradingCards.map((item, index) => (
            <div onClick={() => navigate('/earningAppDetails', { state: { category: item.Category ,id:item.id} })}>
            <TradingCards
              key={item.id || index}
              title={item.Name}
              img={item.Logo || item.MainImage}
              rating={item.rating || "4.7"}
              details={item.Description || 'No description'}
              compact={false}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EarningApp;
