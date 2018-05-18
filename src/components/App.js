import React from 'react'
import { Router as Router, Route, Switch } from 'react-router-dom'
import Home from './landing/Home'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App