import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Main application component
import './index.css';  // Import global CSS styles
import {Toaster} from "react-hot-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));  // Get the root DOM element

root.render(
  <React.StrictMode>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <App /> 
  </React.StrictMode>
);
