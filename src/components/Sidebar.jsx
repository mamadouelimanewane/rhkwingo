import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { LayoutDashboard, Users, FileSignature, HeartPulse, LogOut } from 'lucide-react';

const Sidebar = () => {
    const { user, actes } = useAppContext();

    if (!user) return null;

    const myDemandsCount = actes.filter(a => a.matricule === user.matricule && a.status === 'attente').length;
    const pendingActsCount = actes.filter(a => a.status === 'attente').length;

    return (
        <nav className="sidebar">
            <div className="sidebar-logo">
                <div className="flag"><span className="flag-g"></span><span className="flag-y"></span><span className="flag-r"></span></div>
                <div><div className="brand">DRH NUMÉRIQUE</div><div className="sub">MINISTÈRE DU TRAVAIL SÉNÉGAL</div></div>
            </div>
            
            <div className="sidebar-user">
                <div className="user-avatar" style={{ background: user.role === 'agent' ? 'var(--green)' : 'var(--gold-dark)' }}>
                    {user.nom.substring(0,2).toUpperCase()}
                </div>
                <div className="user-info">
                    <div className="name">{user.nom}</div>
                    <div className="role">{user.role === 'agent' ? `Agent (${user.matricule})` : 'Directeur RH'}</div>
                </div>
            </div>
            
            <div className="sidebar-nav">
                {user.role === 'directeur' ? (
                    <>
                        <div className="nav-section">Pilotage</div>
                        <NavLink to="/dashboard" className="nav-item">
                            <span className="icon">📊</span> Tableau de Bord
                        </NavLink>
                        <NavLink to="/mirador" className="nav-item">
                            <span className="icon">🔮</span> MIRADOR+ Analytics
                        </NavLink>
                        
                        <div className="nav-section">Opérations</div>
                        <NavLink to="/carriere360" className="nav-item">
                            <span className="icon">🧑</span> CARRIÈRE360
                        </NavLink>
                        <NavLink to="/actes" className="nav-item">
                            <span className="icon">⚡</span> e-Actes {pendingActsCount > 0 && <span className="nav-badge">{pendingActsCount}</span>}
                        </NavLink>
                        <NavLink to="/bien-etre" className="nav-item">
                            <span className="icon">❤️</span> Bien-Être & Social
                        </NavLink>
                    </>
                ) : (
                    <>
                        <div className="nav-section">Mon Espace</div>
                        <NavLink to="/carriere360" className="nav-item">
                            <span className="icon">🧑</span> Mon Dossier 360
                        </NavLink>
                        <NavLink to="/mes-demandes" className="nav-item">
                            <span className="icon">📝</span> Mes Demandes {myDemandsCount > 0 && <span className="nav-badge">{myDemandsCount}</span>}
                        </NavLink>
                    </>
                )}
            </div>
            
            <div className="sidebar-footer">
                Propulsé par <strong>KWINGO</strong>
            </div>
        </nav>
    );
};

export default Sidebar;
