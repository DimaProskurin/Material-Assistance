import React from 'react';
import './styles.css';


export class Login extends React.Component {

    render() {
        return(
            <div className="mainContainer text-center">
                <div className="cover-container mx-auto">

                    <div className="cover">
                        <h1>Привет!</h1>

                        <p className="lead">
                            Этот сайт создан для облегчения использования системы материальной помощи,
                            действующей на Физтех школе прикладной математики и информатики
                        </p>

                        <p className="lead">
                            <a href="http://127.0.0.1:8000/accounts/google/login/?process=login" className="btn btn-lg btn-secondary">Узнать больше</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
