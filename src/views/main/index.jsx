import React from 'react';
import logo from './grosul.png';
import './styles.css';
import {Avatar} from '../../components/main/avatar'
import trainsLogo from './trains.png'
import medicineLogo from './medecine.png'
import 'bootstrap/dist/css/bootstrap.css'
import {ItemList} from "../../components/compensations/itemList";
import one from './one.jpg'
import remont from './remont.png'
import otherLogo from './other.jpg'
import css from "../../components/header/styles.module.scss";
import {NavLink} from "react-router-dom";
import {List} from "../../components/compensations/list";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <br/>
                    <br/>
                    <div className="card-deck">
                        <Avatar id={"standard"} imageSrc={trainsLogo} title={"Title1"} description={"Description Description"} />
                        <Avatar id={"medicine"} imageSrc={medicineLogo} title={"Title2"} description={"Description"} />
                        <Avatar id={"4"} imageSrc={otherLogo} title={"Title3"} description={"Description"} />
                        <Avatar id={"5"} imageSrc={one} title={"Title4"} description={"Description"} />
                        <Avatar id={"6"} imageSrc={remont} title={"Title5"} description={"Description"} />
                    </div>
                    <br />
                    <br />
                </header>
            </div>
        );
    }
}

export default App;
