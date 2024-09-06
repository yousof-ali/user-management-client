import React from 'react';
import Dashboard from './Components/Dashboard';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-5'>
            <Dashboard></Dashboard> <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;