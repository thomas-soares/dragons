import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DragonsList from './pages/DragonsList';
import Dragon from './pages/Dragon';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={DragonsList} />
                <Route path="/dragon/:id" component={Dragon} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;