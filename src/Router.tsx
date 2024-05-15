import { BrowserRouter, Route, Routes } from 'react-router-dom';

import StayRule from './pages/stayDetail/components/StayRule';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/StayRule" element={<StayRule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
