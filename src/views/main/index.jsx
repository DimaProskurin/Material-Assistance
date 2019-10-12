import React from 'react';
import logo from './grosul.png';
import './styles.css';
import {Avatar} from '../../components/main/avatar'
import trainsLogo from './trains.png'
import medicineLogo from './medicine.svg'

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <br></br>
                    <br></br>
                    <p>Здесь будут плашки!</p>
                    <Avatar imageSrc={trainsLogo} title={"Медицина"} description={"Будь здоров, Иван Петров!"} />
                    <br></br>
                    <br></br>
                </header>
            </div>
        );
    }
}

export default App;
