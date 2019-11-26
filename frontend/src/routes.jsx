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

    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/categories')
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data})
            })
            .catch(console.log)
    }

    render() {
        if (this.state) {
            return (
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/history' component={HistoryMain}/>
                    {
                        this.state.data.categories.map((categories, index) =>
                            (<Route exact path={'/' + categories.url}>
                                <CompensationList category={categories.url} key={index}/>)
                            </Route>))
                    }

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
        else {
            return (
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/history' component={HistoryMain}/>
                </Switch>

            );
        }
    }
}

export default withRouter(MainRouter);