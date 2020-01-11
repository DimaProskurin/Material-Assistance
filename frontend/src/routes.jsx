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
import Login from "./views/login";
import {fetchAuth} from "./actions";
import {getStudentData} from "./utils";
import {fetchStudentData} from "./actions";
import {getStudentHistory} from "./utils";
import {fetchStudentHistory} from "./actions";

export class MainRouter extends Component {
    state = {
        verdict: "ok",
    };

    componentDidMount() {
        getCategoriesFromDB().then((resp) => {
            if (resp === "auth error" || String(resp).startsWith("whitelist error")) {
                this.setState({verdict: resp});
                return;
            }
            this.props.fetchCategories(resp);
            this.props.fetchAuth(true);
        });

        if (this.state.verdict === "ok") {
            getCompensations().then((resp) => {
                if (resp === "auth error" || String(resp).startsWith("whitelist error")) {
                    this.setState({verdict: resp});
                    return;
                }
                this.props.fetchCompensations(resp);
                this.props.fetchAuth(true);
            });
        }


        if (this.state.verdict === "ok") {
            getStudentData().then((resp) => {
                if (resp === "auth error" || String(resp).startsWith("whitelist error")) {
                    this.setState({verdict: resp});
                    return;
                }
                this.props.fetchStudentData(resp);
            })
        }

        if (this.state.verdict === "ok") {
            getStudentHistory().then((resp) => {
                if (resp === "auth error" || String(resp).startsWith("whitelist error")) {
                    this.setState({verdict: resp});
                    return;
                }
                this.props.fetchStudentHistory(resp);
            })
        }
    }

    render() {
        if (this.state.verdict.startsWith("whitelist error") || this.state.verdict === "auth error") {
            return (
                <Switch>
                    <Route path={'/'}>
                        <Login verdict={this.state.verdict} />
                    </Route>
                </Switch>
            )
        } else {
            return (
                <Switch>
                    <Route exact path='/' component={App}/>

                    <Route exact path='/history' component={HistoryMain}/>

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
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        categoryList: state.fetch.categories,
        compensationList: state.fetch.compensations,
    };
};

const mapDispatchToProps = {
    fetchCategories,
    fetchCompensations,
    fetchAuth,
    fetchStudentData,
    fetchStudentHistory,
};

MainRouter = connect(mapStateToProps, mapDispatchToProps)(MainRouter);

export default withRouter(MainRouter);
