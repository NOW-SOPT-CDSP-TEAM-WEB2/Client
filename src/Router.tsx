import { BrowserRouter, Route, Routes } from 'react-router-dom';

import StayFacility from './pages/stayDetail/components/StayFacility';
import StayInfo from './pages/stayDetail/components/StayInfo';
import StayReserve from './pages/stayDetail/components/StayReserve';
import StayRule from './pages/stayDetail/components/StayRule';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/StayRule" element={<StayRule />} />
        <Route path="/StayFacility" element={<StayFacility />} />
        <Route path="/StayReserve" element={<StayReserve />} />
        <Route path="/StayInfo" element={<StayInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
