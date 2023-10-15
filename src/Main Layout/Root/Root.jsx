import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;