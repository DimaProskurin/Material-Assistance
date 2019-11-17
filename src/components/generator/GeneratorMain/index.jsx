import React from 'react'
import {CompensationInfo} from "../compensation";
import {InputBlock} from "../input";
import './styles.css'

export class GeneratorMain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"row generatorContainer"}>
                <div className={"col-xs-6 col-sm-6 col-md-6 col-lg-6"}>
                    <CompensationInfo
                        name={this.props.compensationName}
                        money={this.props.compensationMoney}
                        once={this.props.isCompensationOnce}
                        requirements={this.props.compensationRequirements}
                        additionalInfo={this.props.compensationAdditionalInfo}/>
                </div>
                <div className={"col-xs-6 col-sm-6 col-md-6 col-lg-6"}>
                    <InputBlock compensationName={this.props.compensationName} />
                </div>
            </div>
        )
    }
}

GeneratorMain.propTypes = {
    compensationName: String,
    isCompensationOnce: Boolean,
    compensationMoney: Array,
    compensationRequirements: Array,
    compensationAdditionalInfo: Array,
};

GeneratorMain.defaultProps = {
    compensationName: "",
    isCompensationOnce: false,
    compensationMoney: [],
    compensationRequirements: [],
    compensationAdditionalInfo: [],
};