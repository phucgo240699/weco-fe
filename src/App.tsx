import _ from 'lodash';
import Loader from 'components/Loader';
import { PageRoutes } from 'constants/index';
import { withTranslation } from 'react-i18next';
import useRootSelector from 'store/selectors';
import HomePage from 'screens/home/HomePage';
import PrimaryHeader from 'components/PrimaryHeader';
import React, { Suspense } from 'react';
import SignInPage from 'screens/authentication/SignInPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const ProfilePage = React.lazy(() => import('screens/profile/ProfilePage'))
const SignUpPage = React.lazy(() => import('screens/authentication/SignUpPage'))

const AuthComponent = ({ auth } : { auth: any }) => {
  return (
    <Routes>
      <Route path={PageRoutes.SignIn} element={<SignInPage />} />
      <Route path={PageRoutes.Home} element={_.isNil(auth) ? <Navigate to={PageRoutes.SignIn} /> : <HomePage />} />
      <Route path={PageRoutes.Profile} element={_.isNil(auth) ? <Navigate to={PageRoutes.SignIn} /> : <ProfilePage />} />
      <Route path={PageRoutes.SignUp} element={<SignUpPage />} />
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
