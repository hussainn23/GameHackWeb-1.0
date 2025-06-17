import { Toaster } from "sonner";
import { Routes, Route } from 'react-router-dom';
import ViewApks from './Pages/ViewApks';
import APKDetails from './Pages/APKDetails';
import Layout from './Pages/Layout';
import TradingApp from "./Pages/EarningApp";
import { RumpyApp } from "./Pages/RumpyApp";
import { YonoApp } from "./Pages/YonoApp";
import Home from "./Pages/Home";
import AllAps from "./Pages/AllAps";
import EarningApp from "./Pages/EarningApp";
import EarningAppDetails from "./Pages/EarningAppDetails";

function App() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/allapps" element={<AllAps />}/>
          <Route path='/earningapps'  element={<EarningApp />}/>
          <Route path="/earningAppDetails" element={<EarningAppDetails />}/>
          <Route path="apkdetails/:id" element={<APKDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
