import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';
import PostReservation from './pages/postReservation/PostReservationPage';
import WishList from './pages/wishList/WishList';
import HomePage from './pages/HomePage/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/reservation/post" element={<PostReservation />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
