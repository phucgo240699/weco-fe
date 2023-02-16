import _ from 'lodash';
import Loader from 'components/Loader';
import { ScreenRoutes } from 'constants/index';
import { withTranslation } from 'react-i18next';
import useRootSelector from 'store/selectors';
import HomeScreen from 'screens/home/HomeScreen';
import PrimaryHeader from 'components/PrimaryHeader';
import React, { Suspense } from 'react';
import SignInScreen from 'screens/authentication/SignInScreen';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const ProfileScreen = React.lazy(() => import('screens/profile/ProfileScreen'))
const SignUpScreen = React.lazy(() => import('screens/authentication/SignUpScreen'))

const AuthComponent = ({ auth } : { auth: any }) => {
  return (
    <Routes>
      <Route path={ScreenRoutes.SignIn} element={<SignInScreen />} />
      <Route path={ScreenRoutes.Home} element={_.isNil(auth) ? <Navigate to={ScreenRoutes.SignIn} /> : <HomeScreen />} />
      <Route path={ScreenRoutes.Profile} element={_.isNil(auth) ? <Navigate to={ScreenRoutes.SignIn} /> : <ProfileScreen />} />
      <Route path={ScreenRoutes.SignUp} element={<SignUpScreen />} />
    </Routes>
  )
}

function App() {
  const selectors = useRootSelector();

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
