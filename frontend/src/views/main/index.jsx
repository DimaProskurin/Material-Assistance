import React from 'react';
import './styles.css';
import {Avatar} from '../../components/main/avatar'
import 'bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'
import {fetchCategories} from '../../actions/index'
import {Preloader} from "../../components/preloader";
import {SITE_ADDRESS} from '../../utils/index'


export class App extends React.Component {
    render() {
        if (this.props.categoryList.length !== 0) {
            return (
                <div className="App">
                    <header className="App-header">
                        <br/>
                        <br/>
                        <div className="card-deck">
                            {
                                this.props.categoryList.map((category, index) =>
                                    (<Avatar url={ category.url } imageSrc={ category.image } title={ category.name }
                                            description={ category.description } key={index}/>))
                            }
                        </div>
                    </header>
                </div>
            );
        } else {
            return (
                <Preloader />
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        categoryList: state.fetch.categories
    }
}

const mapDispatchToProps = {
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
