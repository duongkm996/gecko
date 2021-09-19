import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/header';
import { fetchGlobal } from './globalSlice';
import AppRouter from './route/AppRouter';
import type { AppDispatch } from './store';

function App() {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchGlobal());
    }, [])

    return (
        <div className="container">
            <Header />
            <AppRouter />
        </div>
    );
}

export default App;
