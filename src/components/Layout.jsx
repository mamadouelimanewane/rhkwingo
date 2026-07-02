import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Chatbot from './Chatbot';
import { useAppContext } from '../context/AppContext';

const Layout = () => {
    const { user } = useAppContext();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1, width: '100%', overflow: 'hidden' }}>
                <Outlet />
            </div>
            <Chatbot />
        </div>
    );
};

export default Layout;
