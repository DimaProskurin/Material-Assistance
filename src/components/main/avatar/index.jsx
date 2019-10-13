import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'

export class Avatar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-6 col-xl-4">
                <div className="card AvatarBlock-root mx-auto mb-4" style={{maxWidth: "300px", minWidth: "25vw"}}>
                    <figure className="PictureElement-root PictureElement-rich">
                        <picture>
                            <img src={this.props.imageSrc} alt="no image, sry" />
                        </picture>
                    </figure>
                    <div className="card-body">
                        <h4 className="card-title Title-root">{this.props.title}</h4>
                        <p className="card-text BlockDescription-root">{this.props.description}</p>
                    </div>
                </div>
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