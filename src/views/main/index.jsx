import React from 'react';
import logo from './grosul.png';
import './styles.css';
import {Avatar} from '../../components/main/avatar'
import trainsLogo from './trains.png'
import medicineLogo from './medicine.svg'
import 'bootstrap/dist/css/bootstrap.css'

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <br/>
                    <br/>
                    <div className="card-deck">
                        <Avatar imageSrc={trainsLogo} title={"Title"} description={"Description Description Description Description DescriptionDescription"} />
                        <Avatar imageSrc={medicineLogo} title={"Title"} description={"Description"} />
                        <Avatar imageSrc={logo} title={"Title"} description={"Description"} />
                        <Avatar imageSrc={logo} title={"Title"} description={"Description"} />
                        <Avatar imageSrc={logo} title={"Title"} description={"Description"} />


                    </div>
                    <br/>
                    <br/>
                </header>
            </div>
        );
    }
}

export default App;
