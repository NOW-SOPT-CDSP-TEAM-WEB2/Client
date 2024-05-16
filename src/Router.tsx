import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';
import WishList from './pages/wishList/WishList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
