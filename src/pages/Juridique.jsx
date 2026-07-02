import React, { useState } from 'react';
import Header from '../components/Header';
import { Scale, FileWarning, AlertOctagon, UserX, Clock, Gavel } from 'lucide-react';

const Juridique = () => {
    const [tab, setTab] = useState('contrats');

    const contrats = [
        { id: 1, nom: 'Mariama Sow', type: 'CDD (Prestataire)', echeance: '15 Jours', status: 'Critique', departement: 'DSI' },
        { id: 2, nom: 'Ibrahima Faye', type: 'Consultant Externe', echeance: '45 Jours', status: 'Attention', departement: 'Cabinet' },
        { id: 3, nom: 'Awa Diop', type: 'CDD (Contractuel)', echeance: '6 Mois', status: 'Normal', departement: 'Formation' },
    ];

    const contentieux = [
        { id: 1, agent: 'O. Ndiaye (43211/A)', motif: 'Abandon de poste', statut: 'Conseil de discipline (En attente)', date: '2026-06-20' },
        { id: 2, agent: 'Syndicat SAES', motif: 'Recours annulation arrêté', statut: 'Cour Suprême (Instruction)', date: '2026-03-15' },
    ];

    return (
        <>
            <Header title="DAJ" subtitle="Direction des Affaires Juridiques" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Contrats & <span>Aide Juridique</span></h1>
                    <p>Anticipez les expirations de contrats et gérez les contentieux RH en toute sécurité.</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-4 fade-up delay-1" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <button 
                        className={`btn ${tab === 'contrats' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setTab('contrats')}
                    >
                        <Clock size={16} /> Suivi des Contrats
                    </button>
                    <button 
                        className={`btn ${tab === 'contentieux' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setTab('contentieux')}
                    >
                        <Scale size={16} /> Contentieux & Litiges
                    </button>
                </div>

                <div className="fade-up delay-2">
                    {tab === 'contrats' && (
                        <div className="grid-21">
                            <div className="card">
                                <div className="flex-between mb-4">
                                    <div className="card-title" style={{ margin: 0 }}>⚠️ Expirations Imminentes</div>
                                    <button className="btn btn-outline btn-sm">Nouveau Contrat</button>
                                </div>
                                <div className="table-responsive-wrapper">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Nom</th>
                                                <th>Type</th>
                                                <th>Département</th>
                                                <th>Échéance</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contrats.map(c => (
                                                <tr key={c.id}>
                                                    <td className="font-bold">{c.nom}</td>
                                                    <td>{c.type}</td>
                                                    <td>{c.departement}</td>
                                                    <td>
                                                        <span className={`badge ${c.status === 'Critique' ? 'badge-red' : c.status === 'Attention' ? 'badge-gold' : 'badge-green'}`}>
                                                            {c.echeance}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-primary btn-sm">Générer Avenant</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-4">
                                <div className="alert alert-red">
                                    <div className="alert-icon"><AlertOctagon /></div>
                                    <div className="alert-content">
                                        <div className="alert-title">Risque Juridique</div>
                                        <div className="alert-sub">Le contrat de M. Sow arrive à échéance dans 15 jours. La loi exige un préavis immédiat en cas de non-renouvellement.</div>
                                    </div>
                                </div>
                                <div className="card text-center" style={{ padding: '2rem' }}>
                                    <FileWarning size={48} color="var(--gold)" style={{ margin: '0 auto 1rem' }} />
                                    <h3 className="mb-2">Générateur d'Avenants</h3>
                                    <p className="text-sm text-muted mb-4">Créez automatiquement un contrat PDF conforme au code du travail sénégalais.</p>
                                    <button className="btn btn-outline w-full">Lancer l'Assistant</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {tab === 'contentieux' && (
                        <div className="grid-21">
                            <div className="card">
                                <div className="card-title flex items-center gap-2"><Gavel size={18} /> Dossiers en cours d'instruction</div>
                                <div className="table-responsive-wrapper mt-3">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Agent / Tiers</th>
                                                <th>Motif</th>
                                                <th>Date d'ouverture</th>
                                                <th>Statut Actuel</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contentieux.map(c => (
                                                <tr key={c.id}>
                                                    <td className="font-bold">{c.agent}</td>
                                                    <td>{c.motif}</td>
                                                    <td>{c.date}</td>
                                                    <td><span className="badge badge-gray text-white">{c.statut}</span></td>
                                                    <td><button className="btn btn-outline btn-sm">Ouvrir Dossier</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div className="card" style={{ borderTop: '4px solid var(--blue)' }}>
                                <div className="card-title">Saisir la Cellule Juridique</div>
                                <p className="text-sm text-muted mb-4">Demandez un avis de conformité avant de prendre une sanction disciplinaire.</p>
                                
                                <div className="form-group">
                                    <label className="form-label">Type de requête</label>
                                    <select className="form-control form-select">
                                        <option>Avis sur sanction (Mise à pied)</option>
                                        <option>Avis sur licenciement</option>
                                        <option>Interprétation de texte (Décret)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Description du problème</label>
                                    <textarea className="form-control" rows="4" placeholder="Décrivez le fait motivant la saisine..."></textarea>
                                </div>
                                <button className="btn btn-primary w-full mt-2">Envoyer la requête</button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export default Juridique;
