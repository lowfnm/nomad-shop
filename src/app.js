import { Route, Routes } from 'react-router';

import './app.scss';
import NotFoundPage from './pages/404';
import HomePage from './pages/home';
import ShopPage from './pages/shop';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
};

export default App;
