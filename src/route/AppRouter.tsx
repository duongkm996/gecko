import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import BuySwap from '../components/BuySwap';
import Detail from '../components/pages/Detail';
import Home from '../components/pages/Home';

function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/coins/:coinId">
                        <Detail />
                    </Route>
                    <Route path="/swap/pancake">
                        <BuySwap />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
