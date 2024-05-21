import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/main';
import StayCalendar from './pages/stayDetail/components/StayCalendar';
import StayFacility from './pages/stayDetail/components/StayFacility';
import StayInfo from './pages/stayDetail/components/StayInfo';
import StayReserve from './pages/stayDetail/components/StayReserve';
import StayRule from './pages/stayDetail/components/StayRule';
import WishList from './pages/wishList/WishList';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/StayRule" element={<StayRule />} />
        <Route path="/StayFacility" element={<StayFacility />} />
        <Route path="/StayReserve" element={<StayReserve />} />
        <Route path="/StayInfo" element={<StayInfo />} />
        <Route path="/stayCalendar" element={<StayCalendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
