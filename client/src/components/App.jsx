import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Account from './Account';
import Login from './Login';

const App = () => {
    return (
        <div>
            <h1>This is going to be an awesome journey!</h1>
            <br></br>

            <Route path="/" component={Login} exact></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/account" component={Account}></Route>
        </div>
    );
};

export default App;
