import _ from 'lodash';
import useAuth from 'hooks/useAuth';
import Loader from 'components/Loader';
import { ScreenRoutes } from 'constants/index';
import { withTranslation } from 'react-i18next';
import useGlobalSelector from 'store/selectors';
import HomeScreen from 'screens/home/HomeScreen';
import React, { Suspense } from 'react';
import PrimaryHeader from 'components/PrimaryHeader';
import SignInScreen from 'screens/authentication/SignInScreen';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const ProfileScreen = React.lazy(() => import('screens/profile/ProfileScreen'))

const RootComponent = () => {
  return (
    <>
      <Route path={ScreenRoutes.SignIn} element={<SignInScreen />} />
      <Route path={ScreenRoutes.Home} element={<HomeScreen />} />
      <Route path={ScreenRoutes.Profile} element={<ProfileScreen />} />
    </>
  )
}

function App() {
  const { auth } = useAuth();
  const selectors = useGlobalSelector();

  return (
    <BrowserRouter>
      {
        selectors.session.loading
        ? <Loader />
        : <>
          <PrimaryHeader />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {
                  _.isNil(auth) ? <Navigate to={ScreenRoutes.SignIn} /> : <RootComponent />
                }
              </Routes>
            </Suspense>
        </>
      }
    </BrowserRouter>
  );
}

export default withTranslation()(App);
