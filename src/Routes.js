import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CommitViewer from './pages/CommitViewer/CommitViewer';
import Home from './pages/Home/Home';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/commits/:filter" component={CommitViewer} />
            </Switch>
        </Router>
    )
}

export default Routes;