import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './component/Loader/Loader';

const Home = lazy(() => import('./views/HomePage/HomePage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
