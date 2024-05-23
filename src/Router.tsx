import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import PostReservation from './pages/postReservation/PostReservationPage';
import StayDetail from './pages/stayDetail/components/StayDetail';
import StayDetailCombine from './pages/stayDetail/StayDetailCombine';
import StayDetailPage from './pages/stayDetail/StayDetailPage';
import WishList from './pages/wishList/WishList';
import WishListDetail from './pages/wishListDetail/WishListDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wishList" element={<WishList />} />
        <Route path="/reservation/post" element={<PostReservation />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/stayDetail/:roomId" element={<StayDetail />} />
        <Route path="/wishListDetail" element={<WishListDetail />} />
        {/* <Route path="/StayDetailPage/:roomId" element={<StayDetailPage />} /> */}
        <Route path="/stayDetailPage/:roomId" element={<StayDetailCombine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
