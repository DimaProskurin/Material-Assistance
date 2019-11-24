import React from 'react';
import './styles.css'
import {GeneratorMain} from "../../components/generator/GeneratorMain";

export class Generator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <GeneratorMain
                compensationName={'Билеты'}
                compensationMoney={["1 - 4 курс: 80% стоимости", "5 курс и старше: 40% стоимости"]}
                isCompensationOnce={false}
                compensationRequirements={["Документ, подтверждающий стоимость",
                    "Посадочные талоны, если билет возвратный"]}
                compensationAdditionalInfo={["До 6 билетов в год, не более 4 билетов в семестр",
                    "Билеты только домой и обратно!"]}/>
        )
    }
}

Generator.propTypes = {

};

Generator.defaultProps = {

};


