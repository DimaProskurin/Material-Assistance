import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'

export class Avatar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card AvatarBlock-root">
                <img className="card-img-top" src={this.props.imageSrc} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"> {this.props.description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                <br/>
            </div>
        )
    }
}

Avatar.propTypes = {
    imageSrc: String,
    title: String,
    description: String,
};

Avatar.defaultProps = {
    imageSrc: '',
    title: '',
    description: '',
};