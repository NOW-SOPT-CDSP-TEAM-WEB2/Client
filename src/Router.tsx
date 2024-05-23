import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/main';
// import Calendar from './pages/stayDetail/components/Calendar';
// import StayCalendar from './pages/stayDetail/components/StayCalendar';
// import StayFacility from './pages/stayDetail/components/StayFacility';
// import StayHeader from './pages/stayDetail/components/StayHeader';
// import StayInfo from './pages/stayDetail/components/StayInfo';
// import StayReserve from './pages/stayDetail/components/StayReserve';
// import StayRule from './pages/stayDetail/components/StayRule';
import StayDetailPage from './pages/stayDetail/StayDetailPage';
import WishList from './pages/wishList/WishList';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/StayDetailPage" element={<StayDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
