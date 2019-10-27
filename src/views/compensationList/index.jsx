import React from 'react';
import {List} from "../../components/compensations/list";
import {ItemList} from "../../components/compensations/itemList";
import './styles.css'

export class CompensationList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.category === 'Медицина') {
            return (
                <div className="Block">
                    <List items={[
                        <ItemList title={'Лекарства'} description={"Тут что-то"} />,
                        <ItemList title={'Лечение'} description={"А тут ничего"} />
                        ]
                    }/>
                </div>
            );
        } else {
            return (
                <div className="Block">
                    <List items={[
                        <ItemList title={'Одноразовая'} description={"Пасхалка"} />,
                        <ItemList title={'Билеты'} description={"В Магадан"} />
                    ]
                    }/>
                </div>
            );
        }
    }
}

CompensationList.propTypes = {
    category: String,
};

CompensationList.defaultProps = {
    category: "default"
};


