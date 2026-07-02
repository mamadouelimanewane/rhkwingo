import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../context/AppContext';
import { FileText, Users, Download, Megaphone } from 'lucide-react';

const Dashboard = () => {
    const { actes } = useAppContext();
    const pendingActes = actes.filter(a => a.status === 'attente').length;
    const completedActes = actes.filter(a => a.status === 'signe').length;

    // Timeline fictive générée depuis l'état
    const timelineEvents = [
        { id: 1, title: 'Nouvelle demande déposée', user: 'Ousmane Diallo (605112/C)', time: 'Il y a 10 min', color: 'gold' },
        { id: 2, title: 'Acte d\'avancement signé', user: 'Par DGCAA', time: 'Il y a 45 min', color: 'green' },
        { id: 3, title: 'Alerte Quota Mutation', user: 'Région Dakar', time: 'Il y a 2 heures', color: 'red' },
    ];

    return (
        <>
            <Header title="Tableau de Bord Stratégique" subtitle="Vue Direction" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Vue d'ensemble des <span>Ressources Humaines</span></h1>
                    <p>Indicateurs clés et pilotage stratégique de la DRH MEFPT</p>
                </div>

                {/* QUICK ACTIONS */}
                <div className="quick-action-bar fade-up delay-1">
                    <button className="btn-quick">
                        <Download className="icon text-green" /> Rapport Mensuel PDF
                    </button>
                    <button className="btn-quick">
                        <Users className="icon text-gold" /> Convoquer Commission
                    </button>
                    <button className="btn-quick">
                        <FileText className="icon text-blue" /> Auditer MIRADOR
                    </button>
                    <button className="btn-quick">
                        <Megaphone className="icon text-red" /> Diffuser Alerte
                    </button>
                </div>
                
                {/* KPIS */}
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
                        <div className="kpi-trend up">Flux en temps réel</div>
                    </div>
                    <div className="kpi-card blue">
                        <div className="kpi-icon">⚡</div>
                        <div className="kpi-val blue">{completedActes}</div>
                        <div className="kpi-lbl">Actes signés</div>
                        <div className="kpi-trend up">Objectif trimestriel atteint</div>
                    </div>
                    <div className="kpi-card red budget-card">
                        <div className="kpi-val text-white" style={{ fontSize: '2rem' }}>4.2Mds</div>
                        <div className="budget-limit">Masse Salariale / 5Mds</div>
                        <div className="progress-track" style={{ background: 'rgba(255,255,255,0.2)' }}>
                            <div className="progress-fill" style={{ background: '#FFCC00', width: '84%' }}></div>
                        </div>
                    </div>
                </div>
                
                <div className="grid-21 fade-up delay-2">
                    <div className="grid-11">
                        {/* ALERTES */}
                        <div className="card mb-3">
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
                        </div>

                        {/* CALENDRIER RH */}
                        <div className="card">
                            <div className="card-title">📅 Calendrier Stratégique</div>
                            <div className="cal-event">
                                <div className="cal-date"><span className="d">15</span><span className="m">Juil</span></div>
                                <div className="cal-info">
                                    <h4>Commission Nationale d'Avancement</h4>
                                    <p>Sphères Ministérielles de Diamniadio</p>
                                </div>
                            </div>
                            <div className="cal-event">
                                <div className="cal-date"><span className="d">30</span><span className="m">Juil</span></div>
                                <div className="cal-info">
                                    <h4>Clôture des Notations Annuelles</h4>
                                    <p>Date limite de saisie par les N+1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* TIMELINE */}
                    <div>
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-title">⏱️ Flux d'activité (En direct)</div>
                            <div className="timeline mt-3">
                                {timelineEvents.map((ev, idx) => (
                                    <div className="timeline-item" key={ev.id}>
                                        <div className={`timeline-dot bg-${ev.color}`} style={{ background: `var(--${ev.color})` }}></div>
                                        <div className="timeline-line"></div>
                                        <div className="timeline-content">
                                            <div className="tc-title">{ev.title}</div>
                                            <div className="tc-sub">{ev.user}</div>
                                            <div className="tc-date">{ev.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-outline w-full mt-4">Voir tout l'historique</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
