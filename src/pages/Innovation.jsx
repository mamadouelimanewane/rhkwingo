import React from 'react';
import Header from '../components/Header';
import { Search, ShieldAlert, CheckCircle } from 'lucide-react';

const Innovation = () => {
    return (
        <>
            <Header title="INNOVATION & IA" subtitle="Détection & Talents" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Intelligence <span>Artificielle</span> RH</h1>
                    <p>Détection des anomalies et moteur de recherche de compétences (Talent Finder).</p>
                </div>

                <div className="grid-12 fade-up delay-1">
                    <div className="card border-red-500" style={{ borderTop: '4px solid #ef4444' }}>
                        <div className="card-title text-red"><ShieldAlert className="icon" /> Alerte Fraude / Anomalies</div>
                        <p className="text-sm text-muted mb-4">Le moteur IA scanne quotidiennement la base MIRADOR pour identifier des incohérences administratives.</p>
                        
                        <div className="alert alert-red">
                            <div className="alert-content w-full">
                                <div className="flex-between">
                                    <div className="alert-title">Double Affectation Détectée</div>
                                    <span className="badge badge-red">Critique</span>
                                </div>
                                <div className="alert-sub mt-1">L'agent Matricule 554321/Z est déclaré simultanément au Ministère de la Santé (Dakar) et de l'Éducation (Saint-Louis).</div>
                                <button className="btn btn-outline btn-sm mt-2">Diligenter Enquête</button>
                            </div>
                        </div>

                        <div className="alert alert-gold mt-3">
                            <div className="alert-content w-full">
                                <div className="flex-between">
                                    <div className="alert-title">Suspicion d'Agent Fantôme</div>
                                    <span className="badge badge-gold">Vérification Requise</span>
                                </div>
                                <div className="alert-sub mt-1">Matricule 221098/F : Aucune connexion ni présence badgée depuis 14 mois, solde toujours versée.</div>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ borderTop: '4px solid #3b82f6' }}>
                        <div className="card-title text-blue"><Search className="icon" /> Talent Finder Intégré</div>
                        <p className="text-sm text-muted mb-4">Recherchez des profils spécifiques parmi vos agents pour des missions urgentes avant de recruter en externe.</p>
                        
                        <div className="flex gap-2 mb-4">
                            <input type="text" className="form-control" placeholder="Compétence (ex: Chef de projet, Data, Anglais)..." defaultValue="Gestion de Projet Agile" />
                            <button className="btn btn-primary">Rechercher</button>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Match</th>
                                    <th>Nom / Matricule</th>
                                    <th>Poste Actuel</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="badge badge-green">98%</span></td>
                                    <td className="font-bold">Aminata Ndiaye</td>
                                    <td>Chargée d'études (DGPEEC)</td>
                                    <td><button className="btn btn-outline btn-sm">Voir CV</button></td>
                                </tr>
                                <tr>
                                    <td><span className="badge badge-gold">85%</span></td>
                                    <td className="font-bold">Cheikh Fall</td>
                                    <td>Informaticien (DSI)</td>
                                    <td><button className="btn btn-outline btn-sm">Voir CV</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Innovation;
