import { Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
