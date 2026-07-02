import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { LayoutDashboard, Users, FileSignature, HeartPulse, LogOut, X, PieChart, ShieldAlert, GraduationCap, Briefcase, Folder, GitMerge } from 'lucide-react';

const Sidebar = () => {
    const { user, actes, isMobileMenuOpen, setIsMobileMenuOpen } = useAppContext();

    if (!user) return null;

    const myDemandsCount = actes.filter(a => a.matricule === user.matricule && a.status === 'attente').length;
    const pendingActsCount = actes.filter(a => a.status === 'attente').length;

    return (
        <>
            {isMobileMenuOpen && (
                <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
            )}
            <nav className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-logo">
                    <div className="flag"><span className="flag-g"></span><span className="flag-y"></span><span className="flag-r"></span></div>
                    <div><div className="brand">DRH NUMÉRIQUE</div><div className="sub">MINISTÈRE DU TRAVAIL SÉNÉGAL</div></div>
                    <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
                        <X size={20} />
                    </button>
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
            
            <div className="sidebar-nav" onClick={() => setIsMobileMenuOpen(false)}>
                {user.role === 'directeur' ? (
                    <>
                        <div className="nav-section">Pilotage</div>
                        <NavLink to="/dashboard" className="nav-item">
                            <span className="icon">📊</span> Tableau de Bord
                        </NavLink>
                        <NavLink to="/mirador" className="nav-item">
                            <span className="icon">🔮</span> MIRADOR+ Analytics
                        </NavLink>
                        <NavLink to="/budget-sim" className="nav-item">
                            <span className="icon"><PieChart size={16}/></span> Budget'Sim
                        </NavLink>
                        
                        <div className="nav-section">Opérations</div>
                        <NavLink to="/carriere360" className="nav-item">
                            <span className="icon">🧑</span> CARRIÈRE360
                        </NavLink>
                        <div className="nav-section">Dématérialisation</div>
                        <NavLink to="/actes" className="nav-item">
                            <span className="icon">⚡</span> e-Actes {pendingActsCount > 0 && <span className="nav-badge">{pendingActsCount}</span>}
                        </NavLink>
                        <NavLink to="/workflows" className="nav-item">
                            <span className="icon"><GitMerge size={16}/></span> Moteur Workflows
                        </NavLink>
                        <NavLink to="/ged" className="nav-item">
                            <span className="icon"><Folder size={16}/></span> E-Docs (GED)
                        </NavLink>

                        <div className="nav-section">Développement</div>
                        <NavLink to="/academy" className="nav-item">
                            <span className="icon"><GraduationCap size={16}/></span> Academy E-Learning
                        </NavLink>
                        
                        <div className="nav-section" style={{ color: 'var(--blue)' }}>Innovation & IA</div>
                        <NavLink to="/innovation" className="nav-item">
                            <span className="icon text-blue"><ShieldAlert size={16}/></span> Détection & Talents
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
                        
                        <div className="nav-section">Mobilité & Évolution</div>
                        <NavLink to="/bourse-emploi" className="nav-item">
                            <span className="icon"><Briefcase size={16}/></span> GÉO-POSTES (Bourse)
                        </NavLink>
                        <NavLink to="/academy" className="nav-item">
                            <span className="icon"><GraduationCap size={16}/></span> Academy E-Learning
                        </NavLink>
                    </>
                )}
            </div>
            
            
            <div className="sidebar-footer">
                Propulsé par <strong>KWINGO</strong>
            </div>
        </nav>
        </>
    );
};

export default Sidebar;
