import React from 'react';
import logo from './grosul.png';
import './styles.css';
import {Avatar} from '../../components/main/avatar'
import trainsLogo from './trains.png'
import medicineLogo from './vectorpaint.svg'
import 'bootstrap/dist/css/bootstrap.css'
import {ItemList} from "../../components/compensations/itemList";
import one from './one.jpg'
import remont from './remont.png'
import otherLogo from './other.jpg'
import css from "../../components/header/styles.module.scss";
import {NavLink} from "react-router-dom";
import {List} from "../../components/compensations/list";
import {HistoryItem} from "../../components/history/item";
import standardImg from './standard.svg'
import compensationImg from './toolsNew2.svg'
import markImg from './markNew.svg'
import alarmImg from './alarmNew.svg'
import {CompensationInfo} from "../../components/generator/compensation";
import axios from 'axios';
import {connect} from 'react-redux'
import {fetchCategories} from '../../actions/index'

export class App extends React.Component {
    constructor(props) {
        super(props);

        if (Object.keys(this.props.categoryList).length === 0) {

            // here you should download data from database
            let dataFromDB = {1: "standard", 2: "medicine", 3: "repairs"};

            // put your data to redux store
            this.props.fetchCategories(dataFromDB);

        } else {
            // data has already been downloaded and put to the store
            console.log(this.props.categoryList);
        }
    }

    // get data from database from server
    async getDataCategories(){
        const response = await axios.get("http://127.0.0.1:8000/polls/categories/");
        return response.data;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <br/>
                    <br/>

                    {this.props.categoryList[1]}

                    <div className="card-deck">
                        <Avatar id={"standard"} imageSrc={standardImg} title={"Стандартная"} description={"Билеты и разовая помощь"} />
                        <Avatar id={"medicine"} imageSrc={medicineLogo} title={"Медицина"} description={"Лекарства, лечение и другое"} />
                        <Avatar id={"repairs"} imageSrc={compensationImg} title={"Обустройство"} description={"Ремонт и техника"} />
                        <Avatar id={"other"} imageSrc={alarmImg} title={"Другое"} description={"Ежемесячная помощь, компенсация стипендии, военная форма"} />
                    </div>
                    <br />
                    <br />
                </header>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categoryList: state.categories.categories
    }
}

const mapDispatchToProps = {
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
