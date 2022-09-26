import 'locales/index';
import App from './App';
import { store } from 'store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'contexts/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>
);
