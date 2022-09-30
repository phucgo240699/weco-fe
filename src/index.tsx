import 'locales/index';
import App from './App';
import "./index.css";
import { persistedStore, store } from 'store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react'
import Loader from 'components/Loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);
