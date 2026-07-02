import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Login = () => {
    const [role, setRole] = useState('directeur'); // 'directeur' or 'agent'
    const { login } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const matricule = role === 'agent' ? '700010/B' : '123456/A';
        login(matricule, role);
        if (role === 'directeur') {
            navigate('/dashboard');
        } else {
            navigate('/carriere360');
        }
    };

    return (
        <div className="login-page">
            <div className="login-card fade-up">
                <div className="login-logo">
                    <div className="sidebar-logo" style={{ padding: 0, border: 'none' }}>
                        <div className="flag">
                            <span className="flag-g"></span><span className="flag-y"></span><span className="flag-r"></span>
                        </div>
                        <div>
                            <div className="brand">DRH NUMÉRIQUE</div>
                            <div className="sub">MINISTÈRE DU TRAVAIL SÉNÉGAL</div>
                        </div>
                    </div>
                </div>
                
                <h1 className="login-title">Bienvenue sur votre espace</h1>
                <p className="login-sub">Accédez à l'écosystème RH intégré</p>
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Profil de connexion (Démonstration)</label>
                        <select 
                            className="form-control form-select" 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="directeur">Directeur / Décideur RH</option>
                            <option value="agent">Agent de l'État</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Mot de passe</label>
                        <input type="password" className="form-control" defaultValue="password" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary login-btn">Se Connecter</button>
                </form>
                
                <div className="by-kwingo">
                    Développé avec ❤️ par <span>KWINGO</span>
                </div>
            </div>
        </div>
    );
};

export default Login;
