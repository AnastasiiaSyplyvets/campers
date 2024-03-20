import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

import ErrorPage from 'pages/ErrorPage/ErrorPage';

const test = import.meta.env.VITE_API_TEST;

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
