import React from 'react';
import { links } from './Header/Header';

const Dashboard = () => {
    return (
        <div className='hidden md:grid bg-base-200 md:col-span-1 border-2 '>
            <ul className='text-3xl ml-4'>
                {links}
            </ul>
        </div>
    );
};

export default Dashboard;