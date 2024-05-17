import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';
import WishList from './pages/wishList/WishList';
import PostReservation from './pages/postReservation/PostReservationPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/reservation/post" element={<PostReservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
