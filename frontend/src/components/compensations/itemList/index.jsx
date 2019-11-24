import React from 'react'
import './styles.css'
import oneTime from './oneNew.svg'
import ReactTooltip from 'react-tooltip'
import {NavLink} from "react-router-dom";

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
                        <p style={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottomStyle: "dashed"}}>
                            <div style={{marginBottom: "16px"}}>
                                Размер:
                                {this.props.money.length > 1 ? (
                                    <ul style={{margin: "0px"}}>
                                        {this.props.money.map((elem) =>
                                            <li>{elem}</li>
                                        )}
                                    </ul>
                                ) : (
                                    " " + this.props.money[0]
                                )}
                            </div>
                            {this.props.isOnce ? (
                                <div style={{marginBottom: "16px"}}>
                                    <img src={oneTime} width={"40px"} alt={"Раз в семестр"} data-tip="Раз в семестр"/>
                                    <ReactTooltip place="right" type="dark" effect="solid"/>
                                </div>
                            ) : (
                                <div/>
                            )}
                        </p>

                        {docs.length > 0 ? (
                            <p>
                                Требуется:<br/>
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
                        <NavLink
                            key={"keyName"}
                            to={'/' + this.props.category + '/' + this.props.id}
                            exact={true}
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                            }}>
                            <button type="button" className="btn btn-dark btnAddition">Подать</button>
                        </NavLink>
                    </div>
                </dd>
            </dl>
        )
    }
}

ItemList.propTypes = {
    category: String,
    url: String,
    title: String,
    isOnce: Boolean,
    money: Array,
    documents: Array,
    addInfo: Array,
};

ItemList.defaultProps = {
    category: "defaultCategory",
    url: "",
    title: '',
    isOnce: false,
    money: [],
    documents: [],
    addInfo: [],
};