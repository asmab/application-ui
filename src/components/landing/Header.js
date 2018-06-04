import React from 'react'
import logo from '../../logo.png'
const Header = () => {
    return (
        <header>
            <div className="jumbotron jumbotron-fluid text-blue white-bg  text-center">
                <div className="container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Triangle Solver</h3>
                </div>
            </div>
        </header>
    )
}

export default Header