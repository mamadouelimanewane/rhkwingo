import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../context/AppContext';

const Dashboard = () => {
    const { actes } = useAppContext();
    const pendingActes = actes.filter(a => a.status === 'attente').length;
    const completedActes = actes.filter(a => a.status === 'signe').length;

    return (
        <>
            <Header title="Tableau de Bord Stratégique" subtitle="Vue Direction" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Vue d'ensemble des <span>Ressources Humaines</span></h1>
                    <p>Indicateurs clés consolidés sur l'ensemble du MEFPT</p>
                </div>
                
                <div className="kpi-grid fade-up delay-1">
                    <div className="kpi-card gold">
                        <div className="kpi-icon">👥</div>
                        <div className="kpi-val gold">12,450</div>
                        <div className="kpi-lbl">Agents Actifs (MEFPT)</div>
                        <div className="kpi-trend up">↗ +1.2% ce mois</div>
                    </div>
                    <div className="kpi-card green">
                        <div className="kpi-icon">📄</div>
                        <div className="kpi-val green">{pendingActes}</div>
                        <div className="kpi-lbl">Actes en attente totale</div>
                        <div className="kpi-trend up">Basé sur les données en temps réel</div>
                    </div>
                    <div className="kpi-card red">
                        <div className="kpi-icon">⚠️</div>
                        <div className="kpi-val red">4.2%</div>
                        <div className="kpi-lbl">Taux d'Absentéisme (Maladie)</div>
                        <div className="kpi-trend down">↗ +0.5% d'alerte</div>
                    </div>
                    <div className="kpi-card blue">
                        <div className="kpi-icon">⚡</div>
                        <div className="kpi-val blue">{completedActes}</div>
                        <div className="kpi-lbl">Actes signés numériquement</div>
                        <div className="kpi-trend up">Objectif atteint</div>
                    </div>
                </div>
                
                <div className="grid-12 fade-up delay-2">
                    <div className="card">
                        <div className="card-title">🚨 Alertes & Actions Requises</div>
                        {pendingActes > 0 && (
                            <div className="alert alert-gold">
                                <div className="alert-icon">⏳</div>
                                <div className="alert-content">
                                    <div className="alert-title">{pendingActes} Actes en souffrance</div>
                                    <div className="alert-sub">Attente de signature DGCAA depuis plusieurs jours.</div>
                                </div>
                            </div>
                        )}
                        <div className="alert alert-red">
                            <div className="alert-icon">⚠️</div>
                            <div className="alert-content">
                                <div className="alert-title">Dépassement Quota Mutations</div>
                                <div className="alert-sub">Région de Dakar: +120 demandes en instance.</div>
                            </div>
                        </div>
                        <div className="alert alert-green">
                            <div className="alert-icon">✅</div>
                            <div className="alert-content">
                                <div className="alert-title">Audit Physique 2026 Terminé</div>
                                <div className="alert-sub">Rapport final généré. 45 anomalies détectées.</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-title">📈 Flux d'activité des divisions</div>
                        <div className="grid-2">
                            <div>
                                <h3 className="text-sm font-bold mb-2">DGCAA (Carrières)</h3>
                                <div className="stat-row">
                                    <span className="label">Actes générés ce mois</span>
                                    <span className="value text-green">1,245</span>
                                </div>
                                <div className="stat-row">
                                    <span className="label">Avancements traités</span>
                                    <span className="value">890</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold mb-2">DFC (Formation)</h3>
                                <div className="stat-row">
                                    <span className="label">Agents formés (T2)</span>
                                    <span className="value text-blue">3,200</span>
                                </div>
                                <div className="stat-row">
                                    <span className="label">Budget consommé</span>
                                    <span className="value">450M FCFA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
