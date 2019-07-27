import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Account from './Account';
import Login from './Login';
import Signup from './Signup';

const App = () => {
    return (
        <div>
            <h1>This is going to be an awesome journey!</h1>
            <br></br>

            <Route path="/" component={Login} exact></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/account" component={Account}></Route>
            <Route path="/signup" component={Signup}></Route>
        </div>
    );
};

export default App;
