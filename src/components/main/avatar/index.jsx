import React from 'react'
import './styles.css'

export class Avatar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="AvatarBlock-root">
                <figure className="PictureElement-root PictureElement-rich">
                    <picture>
                        <img src={this.props.imageSrc} alt={"no image, sry"} />
                    </picture>
                </figure>
                <div className="RichBlock-contentWrap">
                    <div className="RichBlock-content">
                        <div className="RichBlock-title">
                            <p className="Title-root">{this.props.title}</p>
                        </div>
                        <div className="BlockDescription-root">
                            <p style={{marginTop: "5px"}}>{this.props.description}</p>
                        </div>
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