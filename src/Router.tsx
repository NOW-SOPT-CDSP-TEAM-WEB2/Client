import { BrowserRouter, Route, Routes } from 'react-router-dom';

import StayFacility from './pages/stayDetail/components/StayFacility';
import StayRule from './pages/stayDetail/components/StayRule';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/StayRule" element={<StayRule />} />
        <Route path="/StayFacility" element={<StayFacility />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
