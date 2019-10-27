import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App from "./views/main/index";
import HistoryMain from "./views/history";
import {CompensationList} from "./views/compensationList";


const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/history' component={HistoryMain} />

        <Route exact path='/category/medicine'>
            <CompensationList category={'Медицина'} />
        </Route>

        <Route exact path='/category/standard'>
            <CompensationList category={'Стандартная'} />
        </Route>

    </Switch>
);

export default withRouter(MainRouter);