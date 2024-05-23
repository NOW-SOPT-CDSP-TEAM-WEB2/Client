import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import PostReservation from './pages/postReservation/PostReservationPage';
import StayDetail from './pages/stayDetail/components/StayDetail';
import WishList from './pages/wishList/WishList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wishList" element={<WishList />} />
        <Route path="/reservation/post" element={<PostReservation />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/stayDetail" element={<StayDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
