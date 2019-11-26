import React from 'react';
import './styles.css'
import {HistoryItem} from "../../components/history/item";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export class HistoryMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={400}
            >
            <div className={"list"}>
                <HistoryItem compensation={"Билеты"} money={"5 550,00"} date={"Ноябрь"} />
                <HistoryItem compensation={"Лекарства"} money={"3 120,13"} date={"Октябрь"} />
                <HistoryItem compensation={"Ремонт"} money={"15 520,00"} date={"Сентябрь"} />
                <HistoryItem compensation={"Ежемесячная"} money={"18 000,00"} date={"Август"} />
                <HistoryItem compensation={"Лекарства"} money={"9 900,00"} date={"Август"} />
                <HistoryItem compensation={"Стипендия"} money={"15 500,00"} date={"Июль"} />
                <HistoryItem compensation={"Разовая"} money={"4 500,00"} date={"Июль"} />
                <HistoryItem compensation={"Билеты"} money={"1 200,00"} date={"Июнь"} />
                <HistoryItem compensation={"Шоколадка"} money={"500,00"} date={"Июнь"} />
            </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default HistoryMain;
