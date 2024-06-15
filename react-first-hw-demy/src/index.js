import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Info } from './components/Info';
import { Modal } from './components/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Modal />
    <Header />
    <Main />
    <Info />
  </React.StrictMode>
);

