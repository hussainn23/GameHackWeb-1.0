
import React, { useEffect, useState } from 'react'
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase';
import { Button } from '../components/ui/button';
import { useNavigate } from "react-router-dom";
const ViewApks = () => {
   const navigate = useNavigate();
    const [apkList,setapkList]=useState([])
  useEffect(() => {
    const apkCollectionRef = collection(db, 'APK');

    const fetchAPK = onSnapshot(apkCollectionRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setapkList(data);
    });

    return () => fetchAPK();
  }, []);
  return (
   <div className="p-4 ">
    <h2 className='font-bold text-2xl p-4'>List of all APKS</h2>
    <ul className="space-y-4">
        {apkList.map((apk,index)=>(
            <div key={apk.id} className="p-4 border rounded shadow">
                 <p>{apk.Name}</p>
            <Button variant='secondary'  onClick={() => navigate(`/apkdetails/${apk.id}`)}
            >
           View Details
           </Button>
            </div>
           
        ))}
    </ul>
    </div>
  )
}

export default ViewApks