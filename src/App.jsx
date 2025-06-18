import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from '../src/Component/Loader'; // import your loader
import { Toaster } from "sonner";

// Your pages
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import AllAps from "./Pages/AllAps";
import EarningApp from "./Pages/EarningApp";
import EarningAppDetails from "./Pages/EarningAppDetails";
import APKDetails from './Pages/APKDetails';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Adjust duration as needed (in ms)

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Toaster richColors position="top-center" />
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/allapps" element={<AllAps />} />
          <Route path="/earningapps" element={<EarningApp />} />
          <Route path="/earningAppDetails" element={<EarningAppDetails />} />
          <Route path="apkdetails/:id" element={<APKDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
