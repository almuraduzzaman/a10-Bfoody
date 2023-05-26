import React from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollRestoration/>
        </div>
    );
};

export default Layout;