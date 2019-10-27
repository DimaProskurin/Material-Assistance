import React from 'react'
import './styles.css'

export class ItemList extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        isOpen: false,
    };

    render() {
        let isOpened = this.state.isOpen;

        return (
            <dl className={"direction__item" + (isOpened ? " isOpen" : "")} onClick={() => {
                this.setState({isOpen: !this.state.isOpen});
            }}>
                <dt>{this.props.title}</dt>
                <dd className={isOpened ? "isOpen" : ""}>
                    <div className="direction__text">
                        <p>{this.props.description}</p>
                    </div>
                </dd>
            </dl>
        )
    }
}

ItemList.propTypes = {
    title: String,
    description: String,
};

ItemList.defaultProps = {
    title: '',
    description: '',
};