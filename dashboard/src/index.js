import React, { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback='Loading...'>
        <App />
        <Toaster 
          toastOptions={{
            position: "top-right",
            style: {
              background: "#283046",
              color: "#fff",
            }
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
