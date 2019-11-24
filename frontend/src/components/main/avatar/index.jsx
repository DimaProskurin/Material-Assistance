import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from "react-router-dom";

export class Avatar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card AvatarBlock-root">
                <NavLink
                    key={"keyName"}
                    to={'/' + this.props.url}
                    exact={true}
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    <img className="card-img-top" src={this.props.imageSrc} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}</p>
                        </div>
                </NavLink>
            </div>
        )
    }
}

Avatar.propTypes = {
    url: String,
    imageSrc: String,
    title: String,
    description: String,
};

Avatar.defaultProps = {
    url: '',
    imageSrc: '',
    title: '',
    description: '',
};