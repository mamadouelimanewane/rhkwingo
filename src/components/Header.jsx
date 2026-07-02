import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, subtitle }) => {
    const { notifications, setNotifications, logout } = useAppContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleNotifClick = () => {
        if (notifications > 0) {
            alert(`Vous avez ${notifications} nouvelles notifications RH.`);
            setNotifications(0);
        }
    };

    const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <header className="header">
            <div className="header-title">
                {title} {subtitle && <span>| {subtitle}</span>}
            </div>
            <div className="header-actions">
                <div className="header-date" style={{textTransform: 'capitalize'}}>{today}</div>
                <div className="notif-btn" onClick={handleNotifClick}>
                    🔔{notifications > 0 && <span className="notif-dot"></span>}
                </div>
                <button onClick={handleLogout} className="btn btn-outline btn-sm">Déconnexion</button>
            </div>
        </header>
    );
};

export default Header;
