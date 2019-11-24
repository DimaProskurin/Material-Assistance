import React from 'react';
import './styles.css';
import {Avatar} from '../../components/main/avatar'
import 'bootstrap/dist/css/bootstrap.css'


const BACK = 'http://127.0.0.1:8000/';


export class App extends React.Component {
    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/categories/')
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data})
            })
            .catch(console.log)
    }
    render() {
        if(this.state) {
            return (
                <div className="App">
                    <header className="App-header">
                        <br/>
                        <br/>
                        <div className="card-deck">
                            {
                                this.state.data.categories.map((category, index) =>
                                    (<Avatar url={ category.url } imageSrc={ BACK + category.image } title={ category.name }
                                            description={ category.description }/>))
                            }
                        </div>
                        <br/>
                        <br/>
                    </header>
                </div>
            );
        }else
            return (
                <div className="App">
                    <header className="App-header">
                        <p>ЗАГРУЗКА</p>
                    </header>
                </div>
            );
    }
}

export default App;
