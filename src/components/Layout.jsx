import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppContext } from '../context/AppContext';

const Layout = () => {
    const { user } = useAppContext();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1, width: '100%' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
