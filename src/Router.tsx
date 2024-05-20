import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';
import WishList from './pages/wishList/WishList';
import WishListDetail from './pages/wishListDetail/WishListDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/wishListDetail" element={<WishListDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
