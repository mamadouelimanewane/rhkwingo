import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ShieldCheck, Zap, Database } from 'lucide-react';

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
        <div className="split-landing">
            {/* LEFT SIDE - BRANDING */}
            <div className="split-left fade-up">
                <div className="split-left-content">
                    <div className="flex gap-2 mb-4">
                        <span className="flag-g" style={{ width: 12, height: 40, borderRadius: 4 }}></span>
                        <span className="flag-y" style={{ width: 12, height: 40, borderRadius: 4 }}></span>
                        <span className="flag-r" style={{ width: 12, height: 40, borderRadius: 4 }}></span>
                    </div>
                    
                    <h1 className="landing-brand">
                        DRH <span>NUMÉRIQUE</span>
                    </h1>
                    
                    <p className="landing-desc">
                        Ministère de l'Emploi et de la Formation Professionnelle et Technique (MEFPT). 
                        Un écosystème intégré pour une gestion RH transparente, rapide et axée sur les données.
                    </p>

                    <div className="landing-features">
                        <div className="l-feature">
                            <div className="icon"><Zap size={24} color="#FFCC00" /></div>
                            <div>
                                <h4>Délais Réduits</h4>
                                <p>Traitement des actes en 3 jours au lieu de 3 semaines.</p>
                            </div>
                        </div>
                        <div className="l-feature">
                            <div className="icon"><Database size={24} color="#00c857" /></div>
                            <div>
                                <h4>Données Fiables</h4>
                                <p>Interopérabilité native avec MIRADOR.</p>
                            </div>
                        </div>
                        <div className="l-feature">
                            <div className="icon"><ShieldCheck size={24} color="#60a5fa" /></div>
                            <div>
                                <h4>Transparence</h4>
                                <p>Processus d'avancement et de mutation équitables.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE - LOGIN */}
            <div className="split-right">
                <div className="glass-panel fade-up delay-1">
                    <h2 className="login-title" style={{ fontSize: '1.5rem' }}>Bienvenue sur votre espace</h2>
                    <p className="login-sub" style={{ marginBottom: '2.5rem' }}>Accédez à l'écosystème RH intégré</p>
                    
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Profil de connexion (Démonstration)</label>
                            <select 
                                className="form-control form-select" 
                                value={role} 
                                onChange={(e) => setRole(e.target.value)}
                                style={{ background: 'rgba(0,0,0,0.3)' }}
                            >
                                <option value="directeur">Directeur / Décideur RH</option>
                                <option value="agent">Agent de l'État</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" defaultValue="password" style={{ background: 'rgba(0,0,0,0.3)' }} />
                        </div>
                        
                        <button type="submit" className="btn btn-primary login-btn" style={{ marginTop: '1.5rem', padding: '1rem' }}>
                            Se Connecter
                        </button>
                    </form>
                    
                    <div className="by-kwingo" style={{ textAlign: 'center', marginTop: '3rem' }}>
                        Développé avec ❤️ par <span>KWINGO</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
