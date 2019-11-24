import React from 'react';
import {List} from "../../components/compensations/list";
import {ItemList} from "../../components/compensations/itemList";
import './styles.css'
import {Avatar} from "../../components/main/avatar";


function stringToArray(string) {
    if (string === '')
        return  [];
    return string.split('\n');
}

export class CompensationList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/compensations/?category_url=' + this.props.category)
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data})
            })
            .catch(console.log)
    }

    // Получение данных для всех ItemList должно приходить через БД из таблицы с этими компенсациями
    render() {
        if (this.state) {
            return (
                <div className="Block">
                    <List items={
                        this.state.data.compensations.map((compensation, index) =>
                            (<ItemList category={ this.props.category }
                                       id={ compensation.url }
                                       title={compensation.name}
                                       money={ stringToArray(compensation.money) }
                                       documents={ stringToArray(compensation.requirements) }
                                       addInfo={ stringToArray(compensation.additional_info) }
                                       isOnce={compensation.once_a_term}
                            />))
                    }/>
                </div>
            );
        } else {
            return(<div className="Block">Загрузка</div>);
        }
    }
}

CompensationList.propTypes = {
    category: String,
};

CompensationList.defaultProps = {
    category: "default"
};


