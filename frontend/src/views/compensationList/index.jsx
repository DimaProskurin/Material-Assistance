import React from 'react';
import {List} from "../../components/compensations/list";
import {ItemList} from "../../components/compensations/itemList";
import './styles.css'
import {fetchCompensations} from "../../actions";
import {connect} from "react-redux";
import {getCompensations} from "../../utils";
import {stringToArray} from "../../utils";


export class CompensationList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.compensationList.length === 0) {
            getCompensations().then((compensations) => this.props.fetchCompensations(compensations));
        }
    }

    // Получение данных для всех ItemList должно приходить через БД из таблицы с этими компенсациями
    render() {
        if (this.props.compensationList.length !== 0) {
            return (
                <div className="Block">
                    <List items={
                        this.props.compensationList
                            .filter(compensation => compensation.category_url === this.props.categoryUrl)
                            .map((compensation, index) =>
                            (<ItemList categoryUrl={ this.props.categoryUrl }
                                       id={ compensation.url }
                                       title={compensation.name}
                                       money={ stringToArray(compensation.money) }
                                       documents={ stringToArray(compensation.requirements) }
                                       addInfo={ stringToArray(compensation.additional_info) }
                                       isOnce={compensation.once_a_term}
                            />))
                    }/>
                </div>
            );
        } else {
            return(
                <div className="App">
                    <header className="App-header">
                        <div className="spinner-border" style={{width: "5rem", height: "5rem", role: "status"}}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </header>
                </div>
            );
        }
    }
}

CompensationList.propTypes = {
    categoryUrl: String,
};

CompensationList.defaultProps = {
    categoryUrl: "default"
};

let mapStateToProps = (state) => {
    return {
        compensationList: state.fetch.compensations
    };
};

const mapDispatchToProps = {
    fetchCompensations
};

CompensationList = connect(mapStateToProps, mapDispatchToProps)(CompensationList);

export default CompensationList;
