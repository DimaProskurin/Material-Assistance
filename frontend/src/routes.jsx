import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App from "./views/main/index";
import HistoryMain from "./views/history";
import {CompensationList} from "./views/compensationList";
import {Generator} from "./views/generator";
import {fetchCategories} from "./actions";
import {fetchCompensations} from "./actions";
import {connect} from "react-redux";
import {getCategoriesFromDB, getCompensations} from "./utils";
import {Preloader} from "./components/preloader";
import Login from "./views/login";


export class MainRouter extends Component {

    componentDidMount() {
        if (this.props.categoryList.length === 0 || this.props.compensationList.length === 0) {
            getCategoriesFromDB().then((categories) => this.props.fetchCategories(categories));
            getCompensations().then((compensations) => this.props.fetchCompensations(compensations));
        }
    }

    render() {
        return (
            (this.props.compensationList.length === 0 ? (
                <Switch>
                    <Route exact path={'/login'} component={Login}/>
                    <Route path={'/'} component={Preloader} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path='/' component={App}/>

                    <Route exact path='/history' component={HistoryMain}/>

                    <Route exact path={'/login'} component={Login}/>

                    {
                        this.props.categoryList.map((category, index) => (
                                <Route exact path={'/' + category.url} key={index}>
                                    <CompensationList categoryUrl={category.url}/>
                                </Route>
                            )
                        )
                    }

                    {
                        this.props.compensationList.map((compensation, index) => (
                                <Route exact path={'/' + compensation.category_url + '/' + compensation.url} key={index}>
                                    <Generator compensationUrl={compensation.url}/>
                                </Route>
                            )
                        )
                    }

                </Switch>
            ))
        );
    }
}

let mapStateToProps = (state) => {
    return {
        categoryList: state.fetch.categories,
        compensationList: state.fetch.compensations
    };
};

const mapDispatchToProps = {
    fetchCategories,
    fetchCompensations,
};

MainRouter = connect(mapStateToProps, mapDispatchToProps)(MainRouter);

export default withRouter(MainRouter);
