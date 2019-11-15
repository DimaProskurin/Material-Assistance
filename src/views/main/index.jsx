import React from 'react';
import logo from './grosul.png';
import './styles.css';
import {Avatar} from '../../components/main/avatar'
import trainsLogo from './trains.png'
import medicineLogo from './vectorpaint.svg'
import 'bootstrap/dist/css/bootstrap.css'
import {ItemList} from "../../components/compensations/itemList";
import one from './one.jpg'
import remont from './remont.png'
import otherLogo from './other.jpg'
import css from "../../components/header/styles.module.scss";
import {NavLink} from "react-router-dom";
import {List} from "../../components/compensations/list";
import {HistoryItem} from "../../components/history/item";
import standardImg from './standard.svg'
import compensationImg from './toolsNew2.svg'
import markImg from './markNew.svg'
import alarmImg from './alarmNew.svg'

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <br/>
                    <br/>
                    <div className="card-deck">
                        <Avatar id={"standard"} imageSrc={standardImg} title={"Стандартная"} description={"Билеты и разовая помощь"} />
                        <Avatar id={"medicine"} imageSrc={medicineLogo} title={"Медицина"} description={"Лекарства, лечение и другое"} />
                        <Avatar id={"repairs"} imageSrc={compensationImg} title={"Обустройство"} description={"Ремонт и техника"} />
                        <Avatar id={"other"} imageSrc={alarmImg} title={"Другое"} description={"Ежемесячная помощь, компенсация стипендии, военная форма"} />
                    </div>
                    <br />
                    <br />
                </header>
            </div>
        );
    }
}

export default App;
