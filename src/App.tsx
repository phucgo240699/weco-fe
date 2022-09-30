import _ from 'lodash';
import Loader from 'components/Loader';
import { ScreenRoutes } from 'constants/index';
import { withTranslation } from 'react-i18next';
import useGlobalSelector from 'store/selectors';
import HomeScreen from 'screens/home/HomeScreen';
import React, { Suspense, useLayoutEffect } from 'react';
import PrimaryHeader from 'components/PrimaryHeader';
import SignInScreen from 'screens/authentication/SignInScreen';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actions from 'store/actions';

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
  const dispatch = useDispatch();
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
