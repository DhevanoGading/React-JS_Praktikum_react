import React from 'react';
import ReactDOM from 'react-dom';
import BMI from './bmi';
import Bank from './bank';
import Hitung from './harga';
import Biner from './biner';
import Decimal from './decimal';
import Oktal from './oktal';
import Hexadecimal from './hexadecimal';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <BMI />
    <hr></hr>
    <br></br>
    <Bank />
    <hr></hr>
    <br></br>
    <Hitung />
    <hr></hr>
    <br></br>
    <Biner />
    <hr></hr>
    <br></br>
    <Decimal />
    <hr></hr>
    <br></br>
    <Oktal />
    <hr></hr>
    <br></br>
    <Hexadecimal />
  </React.StrictMode>,
  document.getElementById('root')
);