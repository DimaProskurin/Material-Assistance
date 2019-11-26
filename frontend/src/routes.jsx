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

// Аналогично CompensationList все пути должны генерироваться исходя из БД с текущими категориями и компенсациями
export class MainRouter extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.categoryList.length === 0 || this.props.compensationList.length === 0) {
            getCategoriesFromDB().then((categories) => this.props.fetchCategories(categories));
            getCompensations().then((compensations) => this.props.fetchCompensations(compensations));
        }
    }

    render() {
        console.log(this.props.categoryList);
        console.log(this.props.compensationList);

        return (
            <Switch>
                <Route exact path='/' component={App}/>

                <Route exact path='/history' component={HistoryMain}/>

                {
                    this.props.categoryList.map((category, index) => (
                            <Route exact path={'/' + category.url}>
                                <CompensationList categoryUrl={category.url}/>
                            </Route>
                        )
                    )
                }

                <Route exact path='/standard/tickets'>
                    <Generator compensationUrl={"tickets"}/>
                </Route>

                <Route exact path='/standard/onetime'>
                    <Generator compensationUrl={"onetime"}/>
                </Route>

                <Route exact path='/medicine/drugs'>
                    <Generator compensationUrl={"drugs"} />
                </Route>

                <Route exact path='/medicine/doctors'>
                    <Generator compensationUrl={"doctors"} />
                </Route>

                <Route exact path='/medicine/operations'>
                    <Generator compensationUrl={"operations"} />
                </Route>

                <Route exact path='/medicine/equipment'>
                    <Generator compensationUrl={"equipment"} />
                </Route>

                <Route exact path='/medicine/teeth'>
                    <Generator compensationUrl={"teeth"} />
                </Route>

                <Route exact path='/medicine/blood'>
                    <Generator compensationUrl={"blood"} />
                </Route>

                <Route exact path='/medicine/document'>
                    <Generator compensationUrl={"document"} />
                </Route>
            </Switch>
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
