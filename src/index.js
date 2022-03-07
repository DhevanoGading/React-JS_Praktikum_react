import React from 'react';
import ReactDOM from 'react-dom';
import BMI from './bmi';
import Bank from './Bank';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <br></br>
    <BMI />
    <hr></hr>
    <br></br>
    <Bank />
  </React.StrictMode>,
  document.getElementById('root')
);