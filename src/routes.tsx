import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Success from './components/Success';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact={true} />
            <Route component={CreatePoint} path="/create-point" />
            <Route component={Success} path="/submit-succes" />
        </BrowserRouter>
    );
}

export default Routes;