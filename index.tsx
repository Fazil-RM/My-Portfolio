/// <reference types="vite/client" />

import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';


const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to. Check your index.html for <div id='root'></div>");
}

// Create the root once
const root = ReactDOM.createRoot(rootElement);

// Render everything inside ONE tree
root.render(
  <React.StrictMode>
    <HelmetProvider>
      {/* Auth provider wrap. 
          Ensure VITE_GOOGLE_CLIENT_ID is defined in your .env file 
      */}
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ""}>
        <App />
      </GoogleOAuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);