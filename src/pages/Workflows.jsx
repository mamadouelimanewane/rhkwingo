import React from 'react';
import Header from '../components/Header';
import { GitMerge, CheckCircle, Clock, AlertTriangle, Users } from 'lucide-react';

const Workflows = () => {
    return (
        <>
            <Header title="WORKFLOWS" subtitle="Moteur de Routage Administratif" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Circuits de <span>Validation</span></h1>
                    <p>Configurez et suivez en temps réel le routage des dossiers hiérarchiques.</p>
                </div>

                <div className="grid-2 fade-up delay-1">
                    {/* Modélisation du circuit */}
                    <div className="card">
                        <div className="flex-between mb-4">
                            <div className="card-title" style={{ margin: 0 }}>🔄 Circuit Actuel : Demande d'Avancement</div>
                            <button className="btn btn-outline btn-sm"><GitMerge size={14} className="mr-1" /> Modifier Circuit</button>
                        </div>
                        
                        <div className="workflow-diagram mt-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '20px', top: '20px', bottom: '20px', width: '2px', background: 'var(--border)', zIndex: 0 }}></div>
                            
                            <div className="wf-step flex gap-4" style={{ position: 'relative', zIndex: 1 }}>
                                <div className="wf-icon" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle size={20} color="white" />
                                </div>
                                <div className="wf-content">
                                    <h4 className="font-bold">1. Initiation (Agent)</h4>
                                    <p className="text-sm text-muted">Dépôt électronique de la demande.</p>
                                </div>
                            </div>
                            
                            <div className="wf-step flex gap-4" style={{ position: 'relative', zIndex: 1 }}>
                                <div className="wf-icon" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle size={20} color="white" />
                                </div>
                                <div className="wf-content">
                                    <h4 className="font-bold">2. Validation N+1 (Chef Division)</h4>
                                    <p className="text-sm text-muted">Approbation hiérarchique directe.</p>
                                </div>
                            </div>
                            
                            <div className="wf-step flex gap-4" style={{ position: 'relative', zIndex: 1 }}>
                                <div className="wf-icon" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg)' }}>
                                    <Clock size={20} color="white" />
                                </div>
                                <div className="wf-content card" style={{ padding: '0.75rem', marginTop: '-10px', border: '1px solid var(--gold)' }}>
                                    <h4 className="font-bold text-gold">3. Étude Technique (DGCAA)</h4>
                                    <p className="text-sm text-muted mb-2">Contrôle de conformité et génération de l'acte.</p>
                                    <span className="badge badge-gold">145 dossiers en attente ici</span>
                                </div>
                            </div>

                            <div className="wf-step flex gap-4" style={{ position: 'relative', zIndex: 1 }}>
                                <div className="wf-icon" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--bg2)', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ color: 'var(--text3)' }}>4</span>
                                </div>
                                <div className="wf-content opacity-50">
                                    <h4 className="font-bold">4. Signature Électronique (Ministre / DRH)</h4>
                                    <p className="text-sm text-muted">Cachet numérique et publication au coffre-fort.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottlenecks et Délégations */}
                    <div className="flex flex-col gap-4">
                        <div className="card">
                            <div className="card-title">⚠️ Goulots d'étranglement (Bottlenecks)</div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Étape Bloquante</th>
                                        <th>Délai moyen</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="font-bold text-red">Contrôle DGCAA</td>
                                        <td className="text-red">14 Jours</td>
                                        <td><button className="btn btn-outline btn-sm">Alerter</button></td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">Signature Contrôle Financier</td>
                                        <td>5 Jours</td>
                                        <td><button className="btn btn-outline btn-sm">Alerter</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="card">
                            <div className="card-title flex items-center gap-2"><Users size={18} /> Délégation de Signature (Intérim)</div>
                            <p className="text-sm text-muted mb-4">Désignez temporairement un signataire en cas d'absence pour éviter le blocage du workflow.</p>
                            
                            <div className="form-group">
                                <label className="form-label">Délégataire actuel (DRH)</label>
                                <select className="form-control form-select">
                                    <option>Monsieur M. Ndiaye (Adjoint)</option>
                                    <option>Madame F. Diallo</option>
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <input type="date" className="form-control" />
                                <span className="flex-center">au</span>
                                <input type="date" className="form-control" />
                            </div>
                            <button className="btn btn-primary w-full mt-3">Activer la délégation</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Workflows;
