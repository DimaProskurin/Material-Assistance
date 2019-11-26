import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'

export class HistoryItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <containerClass>
                <span className={"compensationTitle"}>
                    {this.props.compensation}
                </span>
                <span>
                    <div className={"money"}>
                        + {this.props.money}
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
    category: String,
    compensation: String,
    money: String,
    date: String,
};