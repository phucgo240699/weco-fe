import _ from 'lodash';
import { dispatch } from 'store';
import actions from 'store/actions';
import Loader from 'components/Loader';
import { ScreenRoutes } from 'constants/index';
import { withTranslation } from 'react-i18next';
import useGlobalSelector from 'store/selectors';
import HomeScreen from 'screens/home/HomeScreen';
import PrimaryHeader from 'components/PrimaryHeader';
import React, { Suspense, useLayoutEffect } from 'react';
import SignInScreen from 'screens/authentication/SignInScreen';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const ProfileScreen = React.lazy(() => import('screens/profile/ProfileScreen'))

const AuthComponent = ({ auth } : { auth: any }) => {
  return (
    <Routes>
      <Route path={ScreenRoutes.SignIn} element={_.isNil(auth) ? <SignInScreen /> : <Navigate to={ScreenRoutes.Home} /> } />
      <Route path={ScreenRoutes.Home} element={_.isNil(auth) ? <Navigate to={ScreenRoutes.SignIn} /> : <HomeScreen />} />
      <Route path={ScreenRoutes.Profile} element={_.isNil(auth) ? <Navigate to={ScreenRoutes.SignIn} /> : <ProfileScreen />} />
    </Routes>
  )
}

function App() {
  const selectors = useGlobalSelector();
  useLayoutEffect(() => {
    dispatch(actions.authentication.signOut())
  }, [])

  return (
    <BrowserRouter>
      {
        !_.isNil(selectors.authentication.auth) && <PrimaryHeader />
      }
      <Suspense fallback={<Loader />}>
        <AuthComponent auth={selectors.authentication.auth} />
      </Suspense>
      {
        selectors.session.loading && <Loader />
      }
    </BrowserRouter>
  );
}

export default withTranslation()(App);
