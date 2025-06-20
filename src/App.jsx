import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../src/Component/Loader';
import { Toaster } from "sonner";

// Layout and pages
const Layout = lazy(() => import('./Pages/Layout'));
const Home = lazy(() => import('./Pages/Home'));
const AllAps = lazy(() => import('./Pages/AllAps'));
const EarningApp = lazy(() => import('./Pages/EarningApp'));
const EarningAppDetails = lazy(() => import('./Pages/EarningAppDetails'));
const APKDetails = lazy(() => import('./Pages/APKDetails'));
const About = lazy(() => import('./Pages/About'));
const Privacy = lazy(() => import('./Pages/Privacy'));
const Terms = lazy(() => import('./Pages/Terms'));
const SearchAppDetails = lazy(() => import('./Pages/SearchAppDetails'));

function App() {
  return (
    <>
      <Toaster richColors position="top-center" />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/allapps" element={<AllAps />} />
            <Route path="/earningapps" element={<EarningApp />} />
            <Route path="/earningAppDetails" element={<EarningAppDetails />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/privacypolicy" element={<Privacy />} />
            <Route path="/termsconditions" element={<Terms />} />
            <Route path="apkdetails/:id" element={<APKDetails />} />
            <Route path="/searchdetails" element={<SearchAppDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
