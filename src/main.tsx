import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';

import '@assets/styles/main.scss';

import ErrorBoundary from '@components/ErrorBoundary';
import { store } from '@store/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store()}>
          <App />
        </Provider>
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
