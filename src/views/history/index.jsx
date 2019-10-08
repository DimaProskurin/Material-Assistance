import React from 'react';
import '../main/styles.css'
import me from './proskurin_spit.jpg'
import './styles.css'

export class HistoryMain extends React.Component {
    render() {
        return (
            <div className="App-header">
                <img src={me} className="MainPicture" alt="proskurin" />
                <br></br>
                <br></br>
                <p>
                    Здесь будет история получения выплат!
                </p>
            </div>
        );
    }
}

export default HistoryMain;
