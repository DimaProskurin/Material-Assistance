import React from 'react';
import './styles.css';
import {SITE_ADDRESS} from "../../utils";

export class Login extends React.Component {
    constructor(props) {
        super(props);

        let showEmailAlert = false;
        if (this.props.verdict.startsWith("whitelist error")) {
            console.log(this.props.verdict);
            let email = this.props.verdict.split(' ')[2];
            console.log(email);

            let dogIndex = email.indexOf('@');
            let domain = email.substr(dogIndex, email.length - dogIndex);
            showEmailAlert =  domain !== "@phystech.edu";
        }
        this.state = {showEmailAlert: showEmailAlert};
    }

    render() {
        return(
            <div className="mainContainer text-center">
                <div className="cover-container mx-auto">
                    {(this.props.verdict.startsWith("whitelist error") && !this.state.showEmailAlert) ? (
                        <div className="cover">
                            <p className="lead">
                                К сожалению, вы не можете просматривать этот сайт, поскольку не являетесь студентом ФПМИ
                            </p>
                        </div>
                    ) : (
                        <div className="cover">
                            {(this.state.showEmailAlert) ? (
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <div role="alert" className="alert alert-danger show" style={{width: "50%"}}>Вход только через @phystech.edu</div>
                                </div>
                            ) : (
                                <div />
                            )}

                            <h1>Привет!</h1>

                            <p className="lead">
                                Этот сайт создан для облегчения использования системы материальной помощи,
                                действующей на Физтех школе прикладной математики и информатики
                            </p>

                            <p className="lead">
                                <a href={SITE_ADDRESS + "/accounts/google/login/?process=login"} className="btn btn-lg btn-secondary">Узнать больше</a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Login;
