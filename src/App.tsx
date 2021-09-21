import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGlobal } from '../src/slices/globalSlice';
import './App.css';
import AppRouter from './route/AppRouter';
import type { AppDispatch } from './store';

function App() {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchGlobal());
    }, [])

    return (
        <div className="container">
            <AppRouter />
        </div>
    );
}

export default App;
