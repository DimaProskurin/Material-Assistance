import React from 'react';
import logo from './grosul.png';
import './styles.css';

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <br></br>
                    <br></br>
                    <p>Здесь будут плашки!</p>
                </header>
            </div>
        );
    }
}

export default App;
