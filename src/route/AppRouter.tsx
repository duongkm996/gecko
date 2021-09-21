import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import BuySwap from '../components/BuySwap';
import Header from '../components/header';
import Detail from '../components/pages/Detail/DetailPage';
import Home from '../components/pages/Home';
import SwapPage from '../components/pages/Swap/SwapPage';

function AppRouter() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/coins/:coinId">
                        <Detail />
                    </Route>
                    <Route path="/swap/pancake">
                        <SwapPage />
                    </Route>
                    <Route path="/swap/flash-swap">
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
