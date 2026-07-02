import React from 'react';
import Header from '../components/Header';

const BienEtre = () => {
    return (
        <>
            <Header title="Bien-Être Agent" subtitle="Suivi Médico-Social" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Baromètre Mensuel du <span>Bien-Être</span></h1>
                    <p>Données anonymisées issues des formulaires agents.</p>
                </div>
                
                <div className="grid-2 fade-up delay-1">
                    <div className="card">
                        <div className="card-title">Santé Globale Perçue</div>
                        <div className="mt-2">
                            <div className="flex-between mb-1"><span className="text-sm">Très bien (65%)</span><span className="text-sm font-bold">7,540 agents</span></div>
                            <div className="progress-track mb-3"><div className="progress-fill pf-green" style={{ width: '65%' }}></div></div>
                            
                            <div className="flex-between mb-1"><span className="text-sm">Moyen (25%)</span><span className="text-sm font-bold">2,900 agents</span></div>
                            <div className="progress-track mb-3"><div className="progress-fill pf-gold" style={{ width: '25%' }}></div></div>
                            
                            <div className="flex-between mb-1"><span className="text-sm">Critique (10%)</span><span className="text-sm text-red font-bold">1,160 agents</span></div>
                            <div className="progress-track mb-3"><div className="progress-fill pf-red" style={{ width: '10%' }}></div></div>
                        </div>
                        
                        <button className="btn btn-outline w-full mt-3">Lancer Campagne Dépistage</button>
                    </div>
                    
                    <div className="card">
                        <div className="card-title">🚨 Demandes Cellule d'Écoute (Anonymes)</div>
                        <table className="table">
                            <thead><tr><th>Région</th><th>Demandes (Mois)</th><th>Tendance</th></tr></thead>
                            <tbody>
                                <tr><td>Dakar</td><td className="font-bold">45</td><td className="text-red">↗ +12%</td></tr>
                                <tr><td>Thiès</td><td className="font-bold">12</td><td className="text-green">↘ -5%</td></tr>
                                <tr><td>Ziguinchor</td><td className="font-bold">28</td><td className="text-red">↗ +8%</td></tr>
                            </tbody>
                        </table>
                        <div className="alert alert-red mt-3">
                            <div className="alert-icon">⚠️</div>
                            <div className="alert-content">
                                <div className="alert-title">Alerte Stress Professionnel</div>
                                <div className="alert-sub">Pic détecté dans la région de Dakar suite aux récentes restructurations. Action recommandée.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default BienEtre;
