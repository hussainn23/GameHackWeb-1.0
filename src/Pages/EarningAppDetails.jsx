import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TradingCards from '../Component/TradingCards';
import { collection, getDocs ,doc,getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase'; // adjust path as needed

const EarningAppDetails = () => {
  const location = useLocation();
  const category = location.state?.category || 'Unknown';
  const rating = location.state?.rating || 'Unknown';

  const [knowMore, setKnowMore] = useState(false);
 const [id, setID] = useState(location.state?.id || null);

  const [tradingCards, setTradingCards] = useState([]);
  const [selectedApp, setSelectedApp] = useState([]);
  const handleKnowMore = () => setKnowMore(!knowMore);
  useEffect(() => {
  console.log('Location:', location);
  console.log('ID:', id);
  console.log('category',category)
}, []);

    
    // Fetch single app by ID
  useEffect(() => {
  const fetchSelectedApp = async () => {
    try {
      if (!id) return;

      const docRef = doc(db, 'APK', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
  setSelectedApp({ id: docSnap.id, ...docSnap.data() });

      } else {
        console.log('No such app found!');
      }
    } catch (error) {
      console.error('Error fetching selected app:', error);
    }
  };

  fetchSelectedApp();
}, [id]);


 useEffect(() => {
  if (selectedApp) {
    console.log('✅ Selected App Data:', selectedApp);
  }
}, [selectedApp]);
 useEffect(() => {
  if (tradingCards) {
    console.log('✅ Trading card App Data:', tradingCards);
  }
}, [tradingCards]);

 useEffect(() => {
  const fetchAppsByCategory = async () => {
    try {
      const apkRef = collection(db, 'APK');
      const snapshot = await getDocs(apkRef);

      const allApps = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredApps = allApps.filter(app => app.Category === category);

      setTradingCards(filteredApps);
    } catch (error) {
      console.error('Error fetching category apps:', error);
    }
  };

  fetchAppsByCategory();
}, [category]);


  return (
    <div className="p-4 flex lg:flex-row sm:flex-col md:flex-col">
      {/* LEFT SECTION */}
         <div className='flex flex-col  justify-center lg:w-[50%] sm:w-[100%] md:w-[100%] '>
                <img src={selectedApp.MainImage} className='rounded-lg w-[90%] h-[200px] m-auto ' />
                <img src={selectedApp.Logo} className='rounded-lg w-16 h-16 relative m-auto top-[-2rem]' />
                <h1 className='text-2xl text-center font-bold text-[#8900C1] relative top-[-2rem]'>{selectedApp.Name}</h1>
                <div className='flex  justify-evenly font-semibold relative top-[-1rem]'>
                    <p> 4.7 <br />★ Rating</p>
                    <p>{selectedApp.SizeMB} <br /> MB</p>
                    <p>151<br />bonus</p>
                </div>
                <div className='flex items-center justify-center gap-1 font-bold '>
                    <button onClick={handleKnowMore} className='rounded-[2rem] font-semibold cursor-pointer px-2 py-[4px] bg-[#E4D8FF] w-[40%]'>Know More</button>
                    <button className='rounded-[2rem] font-semibold cursor-pointer px-2 py-[4px] text-white bg-[#8700BA] w-[40%]'>
                     <a href={selectedApp.URL}  rel="noopener noreferrer">Download</a>
                    </button>
                </div>
               <div
  className={`
    overflow-hidden transition-all duration-500 ease-in-out 
    ${knowMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
    bg-[#F9F2FF] p-4 rounded-xl shadow-md mt-4
  `}
>
  <h2 className="text-2xl font-bold text-[#8900C1] mb-4 text-center">App Details</h2>

  {selectedApp?.Sections?.filter(
    (sec) => sec.Heading || sec.Description || sec.Image
  ).map((section, idx) => (
    <div key={idx} className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      {section.Heading && (
        <h3 className="text-xl font-semibold text-[#7000A8] mb-2">{section.Heading}</h3>
      )}
      {section.Image && (
        <img
          src={section.Image}
          alt={`Section ${idx + 1}`}
          className="w-full h-40  rounded-md mb-2"
        />
      )}
      {section.Description && (
        <p className="text-gray-700 text-sm">{section.Description}</p>
      )}
    </div>
  ))}
</div>




            </div>

      {/* RIGHT SECTION - Related Apps */}
      <div className="lg:w-[50%] sm:w-[100%] md:w-[100%]">
        <h1 className="text-2xl font-bold text-[#8900C1] uppercase">Related APPS</h1>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {tradingCards.map((item, index) => (
            <div  onClick={()=>setID(item.id)}>
                 <TradingCards
              key={item.id || index}
              title={item.Name}
              img={item.Logo || item.MainImage}
              rating={item.rating||"4.7"}
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


export default EarningAppDetails