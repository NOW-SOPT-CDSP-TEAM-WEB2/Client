import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/main';
import PostReservation from './pages/postReservation/PostReservationPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/reservation/post" element={<PostReservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
