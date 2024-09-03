import React from 'react';
import  Header  from './Components/Header/Header';
import Dashboard from './Components/Dashboard';
import { Outlet } from 'react-router-dom';

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