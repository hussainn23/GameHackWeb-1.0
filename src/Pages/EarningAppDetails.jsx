import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TradingCards from '../Component/TradingCards';
import { collection, getDocs ,doc,getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase'; // adjust path as needed
import { Marquee } from '../Component/Marquee';
const EarningAppDetails = () => {
  const detailsRef = useRef(null);
  const location = useLocation();
  const [category, setCategory] = useState('Unknown');
useEffect(() => {
  if (location.state?.category) {
    setCategory(location.state.category);
  }
}, [location.state?.category]);

  const rating = location.state?.rating || 'Unknown';
const [previewImage, setPreviewImage] = useState(null);
  const [knowMore, setKnowMore] = useState(false);
const [id, setID] = useState(null);

useEffect(() => {
  if (location.state?.id) {
    setID(location.state.id);
  }
}, [location.state?.id]);

const [loading, setLoading] = useState(false);
  const [tradingCards, setTradingCards] = useState([]);
  const [selectedApp, setSelectedApp] = useState([]);
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
const handleKnowMore = () => {
  setKnowMore(prev => {
    const newState = !prev;
    if (!prev) {
      // scroll only when opening
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay to allow the section to start expanding
    }
    return newState;
  });
};

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
       setLoading(true); // Start loader
 
       const docRef = doc(db, 'APK', id);
       const docSnap = await getDoc(docRef);
 
       if (docSnap.exists()) {
         setSelectedApp({ id: docSnap.id, ...docSnap.data() });
       } else {
         console.log('No such app found!');
       }
 
       setLoading(false); // End loader
     } catch (error) {
       console.error('Error fetching selected app:', error);
       setLoading(false); // End loader on error too
     }
   };
 
   fetchSelectedApp();
 }, [id]);
 
useEffect(() => {
  // Reset image loading flags when a new ID is selected
  setMainImageLoaded(false);
  setLogoLoaded(false);
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
     <>
 <Marquee />
 <div className="p-4 flex lg:flex-row sm:flex-col md:flex-col">
       {/* LEFT SECTION */}
          <div className='flex flex-col  justify-center lg:w-[50%] sm:w-[100%] md:w-[100%] '>
          {/* Main Image */}
<div className='relative lg:w-[90%] sm:w-[97%] lg:h-[320px] sm:h-[280px] m-auto'>
  {!mainImageLoaded && (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-[1.9rem]">
      <div className="loader border-t-4 border-purple-600 border-solid rounded-full w-10 h-10 animate-spin"></div>
    </div>
  )}
  <img
    src={selectedApp.MainImage}
    onLoad={() => setMainImageLoaded(true)}
    className={`rounded-[1.9rem] sm:rounded-[1.5rem] w-full h-full object-cover transition-opacity duration-500 ${mainImageLoaded ? 'opacity-100' : 'opacity-0'}`}
    alt="Main"
  />
</div>

{/* Logo Image */}
<div className='relative m-auto top-[-2rem] lg:top-[-4rem] sm:top-[-3rem]'>
  {!logoLoaded && (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full w-36 h-36">
      <div className="loader border-t-4 border-purple-600 border-solid rounded-full w-8 h-8 animate-spin"></div>
    </div>
  )}
  <img
    src={selectedApp.Logo}
    onLoad={() => setLogoLoaded(true)}
    className={`rounded-[1rem] lg:w-36 lg:h-36 sm:w-28 sm:h-28 object-cover transition-opacity duration-500 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
    alt="Logo"
  />
</div>

                 <h1 className=' lg:text-[3.7rem] sm:text-[2rem] text-center  font-bold text-[#8900C1] uppercase relative top-[-2rem]'>{selectedApp.Name}</h1>
                 <div className='flex items-center lg:text-[1.2rem] lg:w-[90%]  sm:w-[97%] m-auto justify-between font-semibold relative top-[-1.3rem]'>
                     <p className='text-center'> {selectedApp.rating} <span className='text-red-600'> ★</span><br /> Rating</p>
                     <p className='text-center'>{selectedApp.SizeMB}  MB</p>
                     <p className='text-center'>{selectedApp.bonus}rs<br />bonus</p>
                 </div>
                 <div className='flex bg lg:w-[90%] sm:w-[98%] items-center justify-center sm:gap-4 lg:gap-3 font-bold '>
                     <button onClick={handleKnowMore} className='rounded-[2rem] border-[1px] border-[#8700BA] lg:text-[1.3rem] cursor-pointer lg:p-3 font-semibold  p-2 bg-[#E4D8FF] w-[50%]'>Know More</button>
                     <button className='rounded-[2rem] p-2 font-semibold lg:text-[1.3rem] cursor-pointer lg:p-3 text-white bg-[#8700BA] w-[50%]'>
                      <a href={selectedApp.URL}  rel="noopener noreferrer">Download</a>
                     </button>
                 </div>
                <div  ref={detailsRef}
   className={`
     overflow-hidden transition-all duration-500 ease-in-out 
     ${knowMore ? ' mt-3 max-h-[1000px] p-4 opacity-100' : 'max-h-0 opacity-0'}
     bg-[#F9F2FF] m-[2px] rounded-xl shadow-md 
   `}
 >
   <h2 className="text-2xl p-2 font-bold text-[#8900C1] uppercase mb-4 text-center lg:text-[2.3rem]">App Details</h2>
 
   {selectedApp?.Sections?.filter(
     (sec) => sec.Heading || sec.Description || sec.Image
   ).map((section, idx) => (
     <div key={idx} className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
     
       {section.Image && (
         <img
           src={section.Image}
           alt={`Section ${idx + 1}`}
           className="w-full h-40 lg:h-66 object-cover rounded-md mb-2"
             onClick={() => setPreviewImage(section.Image)}
         />
       )}
       {previewImage && (
   <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
     <div className="relative max-w-[90%] max-h-[90%]">
       <button
         className="absolute top-[-2.5rem]  cursor-pointer right-2 text-white text-3xl font-bold z-50"
         onClick={() => setPreviewImage(null)}
       >
         &times;
         
       </button>
       <img
         src={previewImage}
         alt="Preview"
         className="rounded-lg max-w-full max-h-full object-contain"
       />
     </div>
   </div>
 )}
 
         {section.Heading && (
         <h3 className="text-xl font-semibold text-[#7000A8] uppercase mb-2">{section.Heading}</h3>
       )}
       {section.Description && (
         <p className="text-gray-700 text-sm">{section.Description}</p>
       )}
     </div>
   ))}
 </div>
 
 
 
 
             </div>
 
       {/* RIGHT SECTION - Related Apps */}
       <div className="lg:w-[55%] sm:w-[100%] md:w-[100%]">
         <h1 className="text-2xl lg:p-0 sm:py-3 lg:text-[2rem] font-bold text-[#8900C1] uppercase">Related APPS</h1>
         <div className="mt-1 grid sm:grid-cols-2  lg:grid-cols-2 gap-4 2xl:grid-cols-3">
           {tradingCards.map((item, index) => (
             <div  onClick={()=>setID(item.id)}>
                  <TradingCards
               key={item.id || index}
               title={item.Name}
               img={item.Logo || item.MainImage}
               rating={item.rating||"4.7"}
               details={item.Description || 'No description'}
               compact={false}
               related={true}
               allApps={false}
             />
              
             </div>
            
           ))}
         </div>
       </div>
     </div>
 </>
     
   );
};


export default EarningAppDetails