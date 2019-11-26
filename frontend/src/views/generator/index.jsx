import React from 'react';
import './styles.css'
import {CompensationInfo} from "../../components/generator/compensation";
import {InputBlock} from "../../components/generator/input";
import {fetchCompensations} from "../../actions";
import {connect} from "react-redux";
import {getCompensations} from "../../utils";
import {stringToArray} from "../../utils";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


export class Generator extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.compensationList.length === 0) {
            getCompensations().then((compensations) => this.props.fetchCompensations(compensations));
        }
    }

    render() {
        if (this.props.compensationList.length !== 0) {
            console.log(this.props.compensationList);
            let currentCompensation =
                this.props.compensationList.filter(compensation => compensation.url === this.props.compensationUrl)[0];

            return (
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={400}
                >
                <div className={"row generatorContainer"}>
                    <div className={"col-xs-6 col-sm-6 col-md-6 col-lg-6"}>
                        <CompensationInfo
                            url={currentCompensation.url}
                            name={currentCompensation.name}
                            money={stringToArray(currentCompensation.money)}
                            once={currentCompensation.once_a_term}
                            requirements={stringToArray(currentCompensation.requirements)}
                            additionalInfo={stringToArray(currentCompensation.additional_info)}/>
                    </div>
                    <div className={"col-xs-6 col-sm-6 col-md-6 col-lg-6"}>
                        <InputBlock compensationUrl={currentCompensation.name} />
                    </div>
                </div>
                </ReactCSSTransitionGroup>
            )
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <div className="spinner-border" style={{width: "5rem", height: "5rem", role: "status"}}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </header>
                </div>
            )
        }

    }
}

Generator.propTypes = {
    compensationUrl: String,
};

Generator.defaultProps = {
    compensationUrl: ""
};

let mapStateToProps = (state) => {
    return {
        compensationList: state.fetch.compensations
    };
};

const mapDispatchToProps = {
    fetchCompensations
};

Generator = connect(mapStateToProps, mapDispatchToProps)(Generator);

export default Generator;


