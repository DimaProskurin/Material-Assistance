import React from 'react'
import './styles.css'
import {ItemList} from "../itemList";
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"List"}>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={400}
                >
                    {this.props.items.map((i) => i)}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

List.propTypes = {
    category: String,
    items: PropTypes.arrayOf(ItemList).isRequired,
};

List.defaultProps = {
    category: '',
};