import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Button } from '../components/ui/button';

const APKDetails = () => {
  const { id } = useParams();
  const [apk, setApk] = useState(null);

  useEffect(() => {
    const fetchAPK = async () => {
      const docRef = doc(db, 'APK', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setApk(docSnap.data());
      }
    };

    fetchAPK();
  }, [id]);


  if (!apk) return <p className='p-4'>Loading...</p>;

  return (
    <div className='p-4 '>
      <h2 className='font-bold text-2xl mb-4'>APK Details</h2>
      <p><strong>Name:</strong> {apk.Name}</p>
      <p><strong>Description:</strong> {apk.Description}</p>
      <Button className='mt-2'>
        <a href={apk.URL} download>Download</a>
      </Button>
    </div>
  );
};

export default APKDetails;
