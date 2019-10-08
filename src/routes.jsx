import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App from "./views/main/index";
import HistoryMain from "./views/history";

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/history' component={HistoryMain} />
    </Switch>
);

export default withRouter(MainRouter);