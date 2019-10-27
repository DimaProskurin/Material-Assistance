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

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <br/>
                    <br/>
                    <div className="card-deck">
                        <Avatar id={"1"} imageSrc={trainsLogo} title={"Title1"} description={"Description Description"} />
                        <Avatar id={"3"} imageSrc={medicineLogo} title={"Title2"} description={"Description"} />
                        <Avatar id={"4"} imageSrc={otherLogo} title={"Title3"} description={"Description"} />
                        <Avatar id={"5"} imageSrc={one} title={"Title4"} description={"Description"} />
                        <Avatar id={"6"} imageSrc={remont} title={"Title5"} description={"Description"} />
                    </div>
                    <ItemList title={"Билеты"} description={"Чтобы подать на билеты, необходимы посадочные талоны."} />
                    <ItemList title={"Лекарства"} description={"Чтобы подать на билеты, необходимы посадочные талоны."} />
                    <ItemList title={"Разовая"} description={"Чтобы подать на билеты, необходимы посадочные талоны."} />
                    <br />
                    <br />
                </header>
            </div>
        );
    }
}

export default App;
