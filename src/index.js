import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18
// import ReactDom from 'react-dom'; // React 17 before
import  App from './App';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* React 17 before
const root = document.getElementById('root');
ReactDom.render(
  <React.StrictMode>
    <h1>Hello React</h1>
  </React.StrictMode>,
  root
);
*/
