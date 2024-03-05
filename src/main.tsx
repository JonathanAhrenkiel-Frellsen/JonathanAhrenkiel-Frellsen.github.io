import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './pages/gitprofile.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/*'} element={<GitProfile config={CONFIG} />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
