import React from 'react'
import '../compensation/styles.css'
import PropTypes from 'prop-types';
import {SITE_ADDRESS} from "../../../utils";
import {connect} from "react-redux";

export class InputBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surnameField: "",
            nameField: "",
            middleNameField: "",
            groupField: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            surnameField: this.props.studentData['surname'],
            nameField: this.props.studentData['name'],
            middleNameField: this.props.studentData['middlename'],
            groupField: this.props.studentData['group'],
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
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
                            <input id={"surnameField"} type="text" className="form-control"
                                   placeholder="Фамилия" value={this.state.surnameField} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Имя</label>
                            <input id={"nameField"} type="text" className="form-control"
                                   placeholder="Имя" value={this.state.nameField} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Отчество</label>
                            <input id={"middleNameField"} type="text" className="form-control"
                                   placeholder="Отчество" value={this.state.middleNameField} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Группа</label>
                            <input id={"groupField"} type="text" className="form-control"
                                   placeholder="Группа" value={this.state.groupField} onChange={this.handleChange}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label>Компенсация</label>
                            <input id={"compensationField"} type="text" className="form-control" placeholder={this.props.compensationUrl} disabled/>
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
                            <input id={"dormitoryField"} className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Проживаю в общежитии</label>
                        </div>

                        <div className="form-check">
                            <input id={"scholarField"} className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Не имею стипендии</label>
                        </div>

                        <div className="form-check">
                            <input id={"workField"} className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Не работаю</label>
                        </div>

                        <div className="form-check">
                            <input id={"docsField"} className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Прилагаю документы</label>
                        </div>
                    </div>

                    <button type={"reset"} style={{fontWeight: "bold"}} className="btn btn-dark text" onClick={() => {
                        let surname = document.getElementById("surnameField").value;
                        let name = document.getElementById("nameField").value;
                        let middleName = document.getElementById("middleNameField").value;
                        let fullName = surname + " " + name + " " + middleName;

                        let group = document.getElementById("groupField").value;
                        let compensation = this.props.compensationUrl;

                        let dormitory = document.getElementById("dormitoryField").checked;
                        let scholar = document.getElementById("scholarField").checked;
                        let work = document.getElementById("workField").checked;
                        let docs = document.getElementById("docsField").checked;

                        let myRequest = SITE_ADDRESS + "/api/application/?fullName=" + fullName +
                            "&group=" + group +
                            "&compensationName=" + compensation +
                            "&dormitoryBox=" + dormitory +
                            "&scholarBox=" + scholar +
                            "&workBox=" + work +
                            "&docsBox=" + docs;

                        document.location = myRequest;
                    }}>
                        Получить заявление
                    </button>
                </form>
            </div>
        )
    }
}

InputBlock.propTypes = {
    compensationUrl: PropTypes.string,
};

InputBlock.defaultProps = {
    compensationUrl: ""
};

let mapStateToProps = (state) => {
    return {
        studentData: state.fetch.studentData,
    };
};

InputBlock = connect(mapStateToProps, undefined)(InputBlock);

export default InputBlock;
