import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Home from '../Pages/Home/Home';
import MyAccount from '../Pages/MyAccount/MyAccount'


const router = createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                    
                },
                {
                    path:'/myaccount',
                    element:<MyAccount></MyAccount>
                }
                
            ]
        }
])


export default router;