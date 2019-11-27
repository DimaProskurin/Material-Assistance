import React from 'react'
import './styles.css'

export class Preloader extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="spinner-border" style={{width: "5rem", height: "5rem", role: "status"}}>
                        <span className="sr-only">Loading...</span>
                    </div>
                </header>
            </div>
        )
    }

}