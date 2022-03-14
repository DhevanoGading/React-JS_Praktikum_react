import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BMI from '../bmi';
import Bank from '../bank';
import Hitung from '../harga';
import Biner from '../biner';
import Decimal from '../decimal';
import Oktal from '../oktal';
import Hexadecimal from '../hexadecimal';

const Utama = () => (
    <Switch>
        <Route exact path="/bmi" component={BMI} />
        <Route exact path="/bank" component={Bank} />
        <Route exact path="/hitung" component={Hitung} />
        <Route exact path="/biner" component={Biner} />
        <Route exact path="/decimal" component={Decimal} />
        <Route exact path="/oktal" component={Oktal} />
        <Route exact path="/hexadecimal" component={Hexadecimal} />
    </Switch>
)

export default Utama;