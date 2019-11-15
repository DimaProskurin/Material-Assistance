import React from 'react'
import './styles.css'
import oneTime from './oneNew.svg'
import ReactTooltip from 'react-tooltip'

export class ItemList extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        isOpen: false,
    };

    render() {
        let isOpened = this.state.isOpen;
        let docs = this.props.documents;
        let addInfo = this.props.addInfo;

        return (
            <dl className={"direction__item" + (isOpened ? " isOpen" : "")} onClick={() => {
                this.setState({isOpen: !this.state.isOpen});
            }}>
                <dt>{this.props.title}</dt>
                <dd className={isOpened ? "isOpen" : ""}>
                    <div className="direction__text">
                        <p style={{display: "flex", justifyContent: "space-between", borderBottomStyle: "dashed"}}>
                            <div>
                                Размер:
                                <ul>
                                    {this.props.money.map((elem) =>
                                        <li>{elem}</li>
                                    )}
                                </ul>
                            </div>
                            {this.props.isOnce ? (
                                <div>
                                    <img src={oneTime} width={"40px"} alt={"Раз в семестр"} data-tip="Раз в семестр"/>
                                    <ReactTooltip place="right" type="dark" effect="solid"/>
                                </div>
                            ) : (
                                <div/>
                            )}
                        </p>

                        {docs.length > 0 ? (
                            <p>
                                Требуемые документы:<br/>
                                <ul>
                                    {docs.map((elem) => <li>{elem}</li>)}
                                </ul>
                            </p>
                        ) : (
                            <div/>
                        )}

                        {addInfo.length > 0 ? (
                            <p>
                                Дополнительные сведения:<br/>
                                <ul>
                                    {addInfo.map((elem) => <li>{elem}</li>)}
                                </ul>
                            </p>
                        ) : (
                            <div/>
                        )}
                    </div>
                    <div>
                        <button type="button" className="btn btn-dark btnAddition">Подать</button>
                    </div>
                </dd>
            </dl>
        )
    }
}

ItemList.propTypes = {
    title: String,
    isOnce: Boolean,
    money: Array,
    documents: Array,
    addInfo: Array,
};

ItemList.defaultProps = {
    title: '',
    isOnce: false,
    money: [],
    documents: [],
    addInfo: [],
};