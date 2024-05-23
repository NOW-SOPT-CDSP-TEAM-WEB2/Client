import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WishList from './pages/wishList/WishList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wishList" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
