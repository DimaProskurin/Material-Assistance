import React from 'react'
import './styles.css'
import {ItemList} from "../itemList";
import PropTypes from 'prop-types';

export class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"List"}>
                {this.props.items.map((i) => i)}
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