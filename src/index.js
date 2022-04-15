import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'tailwindcss/d'
import 'tailwindcss/tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <link href="/dist/output.css" rel="stylesheet"></link> */}
    {/* <div className='bg-indigo-900 mx-auto main h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black'> */}
    {/* <div className=' mx-auto main h-screen bg-[#111827]'> */}
      
      <App/>
    {/* </div> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
