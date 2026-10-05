import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contador from './Components/Contador';
import DibujosComplejosArrays from './Components/DibujosComplejosArrays';
import PadreDeportes from './Components/PadreDeportes';
import DibujosComplejosRender from './Components/DibujosComplejosRender';
import reportWebVitals from './reportWebVitals';
import PadreNumeros from './Components/PadreNumeros';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <PadreNumeros/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
