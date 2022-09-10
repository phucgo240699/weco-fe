import React from 'react';
import HomeScreen from 'screens/home';
import { ScreenRoutes } from 'constants/index';
import PrimaryHeader from 'components/PrimaryHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from "react";

const ProfileScreen = React.lazy(() => import('screens/profile'))

function App() {
  return (
    <BrowserRouter>
      <PrimaryHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={ScreenRoutes.Home} element={<HomeScreen />} />
          <Route path={ScreenRoutes.Profile} element={<ProfileScreen />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
