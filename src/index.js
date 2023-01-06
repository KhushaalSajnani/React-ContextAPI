import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthContextProviderComponent} from "./Store/auth-context-v2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthContextProviderComponent>
            <App />
      </AuthContextProviderComponent>
  </React.StrictMode>
);
