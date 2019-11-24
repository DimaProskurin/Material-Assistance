import React from 'react';
import {List} from "../../components/compensations/list";
import {ItemList} from "../../components/compensations/itemList";
import './styles.css'

export class CompensationList extends React.Component {
    constructor(props) {
        super(props);
    }

    // Получение данных для всех ItemList должно приходить через БД из таблицы с этими компенсациями
    render() {
        switch (this.props.category) {
            case 'medicine':
                return (
                    <div className="Block">
                        <List items={[
                            <ItemList
                                category={this.props.category}
                                id={"drugs"}
                                title={'Лекарства'}
                                money={["До 3000р. без рецептов иначе индивидуально"]}
                                documents={["Документ, подтверждающий стоимость", "Рецепт (опционально)"]}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"doctors"}
                                title={'Платные врачи'}
                                money={["До 5000р. без направления иначе индивидуально"]}
                                documents={["Документ, подтверждающий стоимость", "Направление к этому врачу (опционально)"]}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"operations"}
                                title={'Анализы, обследования, процедуры, операции'}
                                money={["До 3000р. без направления иначе индивидуально"]}
                                documents={["Документ, подтверждающий стоимость", "Направление врача (опционально)"]}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"equipment"}
                                title={'Медицинские изделия'}
                                money={["До 5000р. без рецептов иначе индивидуально"]}
                                documents={["Документ, подтверждающий стоимость", "Рецепт на изделие от врача (опционально)"]}
                                addInfo={["К медицинским изделиям также относятся очки и линзы",
                                    "В случае наличия рецепта на линзы для очков компенсация до 10000р.",
                                    "Если не указана стоимость линз для очков, то компенсация min(75% стоимость очков, 10000р.)"]}
                                isOnce={true}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"teeth"}
                                title={'Стоматология'}
                                money={["min(80% стоимости, 15000р.)"]}
                                documents={["Документ, подтверждающий стоимость"]}
                                addInfo={["Стоматологическое лечение должно быть необходимо!",
                                    "Отбеливание, полировка и т.п. не подходят!"]}
                                isOnce={true}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"blood"}
                                title={'Донороство'}
                                money={["1500р."]}
                                documents={["Подтверждающий документ"]}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"document"}
                                title={'Полис'}
                                money={["1 - 2 курс: до 7000р.", "3 курс и старше: до 5000р."]}
                                documents={["Документ, подтверждающий стоимость"]}
                                addInfo={["Компенсацию на полис можно получить 1 раз в год"]}
                                isOnce={true}
                            />,
                        ]
                        }/>
                    </div>
                );

            case 'standard':
                return (
                    <div className="Block">
                        <List items={[
                            <ItemList
                                category={this.props.category}
                                id={"tickets"}
                                title={'Билеты'}
                                money={["1 - 4 курс: 80% стоимости", "5 курс и старше: 40% стоимости"]}
                                documents={["Документ, подтверждающий стоимость",
                                    "Посадочные талоны, если билет возвратный"]}
                                addInfo={["До 6 билетов в год, не более 4 билетов в семестр",
                                    "Билеты только домой и обратно!"]}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"onetime"}
                                title={'Разовая помощь'}
                                money={["1500р."]}
                                addInfo={["1 - 4 курс могут получить компенсацию 2 раза в семестр",
                                    "5 курс и старше 1 раз в семестр"]}
                            />,
                        ]
                        }/>
                    </div>
                );

            case "repairs":
                return (
                    <div className="Block">
                        <List items={[
                            <ItemList
                                category={this.props.category}
                                id={"technique"}
                                title={'Бытовая техника'}
                                money={["min(80% стоимости, 10000р.) на комнату"]}
                                documents={["Чеки"]}
                                addInfo={["Только для студентов бакалавриата, обучающихся на 1 курсе",
                                    "Компенсация выдаётся на холодильник, микроволновую печь"]}
                                isOnce={true}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"room"}
                                title={'Ремонт комнаты'}
                                money={["До 10000р. на комнату"]}
                                documents={["Чеки", "Согласие главы хозяйственного направления перед ремонтом"]}
                                addInfo={["Компенсация выдаётся на обои, краску, расходные материалы"]}
                                isOnce={true}
                            />,
                        ]
                        }/>
                    </div>
                );

            case "other":
                return (
                    <div className="Block">
                        <List items={[
                            <ItemList
                                category={this.props.category}
                                id={"help"}
                                title={'Ежемесячная помощь'}
                                money={["Индивидуально до 10000р."]}
                                documents={["Справка о доходах родителей",
                                    "Справка о составе семьи",
                                    "Другие документы по необходимости (индивидуально)"]}
                                addInfo={["В случае тяжелого материального положения"]}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"scholar"}
                                title={'Компенсация стипендии'}
                                money={["8000р. * 2 месяца"]}
                                documents={["Одна оценка \"удовл\" за весь период обучения"]}
                                addInfo={["Только для студентов бакалавриата, обучающихся на ФПМИ с 1 курса"]}
                                isOnce={true}
                            />,
                            <ItemList
                                category={this.props.category}
                                id={"army"}
                                title={'Военная форма'}
                                money={["До 5000р."]}
                                documents={["Чеки"]}
                                isOnce={true}
                            />,
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


