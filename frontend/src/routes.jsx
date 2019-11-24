import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App from "./views/main/index";
import HistoryMain from "./views/history";
import {CompensationList} from "./views/compensationList";
import {CompensationInfo} from "./components/generator/compensation";
import {InputBlock} from "./components/generator/input";
import {ItemList} from "./components/compensations/itemList";
import {Generator} from "./views/generator";
import {Avatar} from "./components/main/avatar";

// Аналогично CompensationList все пути должны генерироваться исходя из БД с текущими категориями и компенсациями
export class MainRouter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/history' component={HistoryMain}/>

                <Route exact path='/standard'>
                    <CompensationList category={'standard'}/>
                </Route>

                <Route exact path='/medicine'>
                    <CompensationList category={'medicine'}/>
                </Route>

                <Route exact path='/repairs'>
                    <CompensationList category={'repairs'}/>
                </Route>

                <Route exact path='/other'>
                    <CompensationList category={'other'}/>
                </Route>

                <Route path='/standard/'>
                    <Generator/>
                </Route>

                <Route path='/medicine/'>
                    <Generator/>
                </Route>

                <Route path='/repairs/'>
                    <Generator/>
                </Route>

                <Route path='/other/'>
                    <Generator/>
                </Route>
            </Switch>
        );
    }
}

export default withRouter(MainRouter);