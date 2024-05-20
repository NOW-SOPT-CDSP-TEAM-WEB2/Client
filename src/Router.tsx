import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';
import StayDetail from './pages/stayDetail/components/StayDetail';
import WishList from './pages/wishList/WishList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/stayDetail" element={<StayDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
