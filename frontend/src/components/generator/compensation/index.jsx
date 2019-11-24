import React from 'react'
import './styles.css'
import PropTypes from 'prop-types';

export class CompensationInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={'infoBlock'}>
                <div className={'title blockElement'}>
                    {this.props.name}
                </div>

                <div className={'blockElement'}>
                    <span className={'subtitle'}>Размер:</span>
                    <span className={'text'}>
                        {this.props.money.length > 1 ? (
                            <ul style={{margin: "0px"}}>
                                {this.props.money.map((elem) =>
                                    <li>{elem}</li>
                                )}
                            </ul>
                        ) : (
                            " " + this.props.money[0]
                        )}
                    </span>

                    {this.props.once ? (
                        <div className={'once text'}>
                            Эту компенсацию можно получить раз в семестр!
                        </div>
                    ) : (
                        <div/>
                    )}
                </div>

                {this.props.requirements.length > 0 ? (
                    <div className={'blockElement'}>
                        <span className={'subtitle'}>Для получения компенсации требуется: </span> <br/>
                        <span className={'text'}>
                            <ul style={{margin: "0px"}}>
                                {this.props.requirements.map((el) =>
                                    <li>{el}</li>
                                )}
                            </ul>
                        </span>
                    </div>
                ) : (
                    <div />
                )}

                {this.props.additionalInfo.length > 0 ? (
                    <div className={'blockElement'}>
                        <span className={'subtitle'}>Дополнительные сведения: </span> <br/>
                        <span className={'text'}>
                            <ul style={{margin: "0px"}}>
                                {this.props.additionalInfo.map((el) =>
                                    <li>{el}</li>
                                )}
                            </ul>
                        </span>
                    </div>
                ) : (
                    <div />
                )}
            </div>
        )
    }
}

CompensationInfo.propTypes = {
    name: String,
    money: Array,
    once: Boolean,
    requirements: Array,
    additionalInfo: Array,
};

CompensationInfo.defaultProps = {
    name: '',
    money: [],
    once: false,
    requirements: [],
    additionalInfo: [],
};