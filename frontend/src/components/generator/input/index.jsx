import React from 'react'
import '../compensation/styles.css'
import PropTypes from 'prop-types';

export class InputBlock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={"title blockElement"}>
                    Ваши данные
                </div>
                <form className={"text"}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Фамилия</label>
                            <input type="text" className="form-control" placeholder="Фамилия" required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Имя</label>
                            <input type="text" className="form-control" placeholder="Имя" required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Отчество</label>
                            <input type="text" className="form-control" placeholder="Отчество" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Группа</label>
                            <input type="text" className="form-control" placeholder="Группа" required/>
                        </div>

                        <div className="form-group col-md-6">
                            <label>Компенсация</label>
                            <input type="text" className="form-control" placeholder={this.props.compensationUrl} disabled/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label>Дополнительные сведения, которые вы хотите указать в заявлении</label>
                            <textarea className="form-control" rows="3" />
                        </div>
                    </div>

                    <div className={"form-group"}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Проживаю в общежитии</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Не имею стипендии</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Не работаю</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Прилагаю документы</label>
                        </div>
                    </div>

                    <button style={{fontWeight: "bold"}} className="btn btn-dark text">Получить заявление</button>
                </form>
            </div>
        )
    }
}

InputBlock.propTypes = {
    compensationUrl: String,
};

InputBlock.defaultProps = {
    compensationUrl: ''
};