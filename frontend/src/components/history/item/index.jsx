import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from "prop-types";

export class HistoryItem extends React.Component {

    render() {
        return(
            <containerClass>
                <span className={"compensationTitle"}>
                    {this.props.compensation}
                </span>
                <span>
                    <div className={"money"}>
                        + {this.props.money + "₽"}
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end"}}>
                        <small className="text-muted">{this.props.date}</small>
                    </div>
                </span>
            </containerClass>
        )
    }
}

HistoryItem.propsTypes = {
    category: PropTypes.string,
    compensation: PropTypes.string,
    money: PropTypes.string,
    date: PropTypes.string,
};