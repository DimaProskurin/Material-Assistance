import React from 'react';
import './styles.css'
import {HistoryItem} from "../../components/history/item";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {connect} from "react-redux";


export class HistoryMain extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={400}
            >

                {this.props.studentHistory.length > 0 ? (
                    <div className={"list"}>
                        {
                            this.props.studentHistory.map((payment, index) => (
                                <HistoryItem compensation={payment.compensation_id} money={payment.money} date={payment.date} key={index} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="mainContainer text-center">
                        <div className="cover-container mx-auto">

                            <div className="cover">
                                <h1>:(</h1>

                                <p className="lead">
                                    Вы ещё не получали материальную помощь
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </ReactCSSTransitionGroup>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        studentHistory: state.fetch.studentHistory
    };
};

HistoryMain = connect(mapStateToProps, undefined)(HistoryMain);

export default HistoryMain;
