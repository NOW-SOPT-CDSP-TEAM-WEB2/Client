import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
