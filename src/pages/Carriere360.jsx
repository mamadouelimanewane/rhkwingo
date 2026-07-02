import React, { useState } from 'react';
import Header from '../components/Header';
import { useAppContext } from '../context/AppContext';

const Carriere360 = () => {
    const { user, actes, addDemande } = useAppContext();
    const [showModal, setShowModal] = useState(false);
    const [demandeType, setDemandeType] = useState('Congé Administratif');

    const myActes = actes.filter(a => a.matricule === user.matricule);
    const currentDemands = myActes.filter(a => a.status === 'attente');
    const pastActes = myActes.filter(a => a.status !== 'attente');

    const handleDemandeSubmit = (e) => {
        e.preventDefault();
        addDemande(demandeType);
        setShowModal(false);
    };

    return (
        <>
            <Header title="CARRIÈRE360" subtitle="Portail Agent" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Bonjour, <span>{user.nom.split(' ')[0]}</span></h1>
                    <p>Gérez votre carrière, vos demandes et vos actes administratifs en toute autonomie.</p>
                </div>

                <div className="grid-21 fade-up delay-1">
                    <div className="card">
                        <div className="flex-between mb-3">
                            <div className="card-title" style={{ margin: 0 }}>👤 Informations Professionnelles</div>
                            <span className="badge badge-green">Actif</span>
                        </div>
                        
                        <div className="grid-2 mb-3">
                            <div>
                                <div className="form-group">
                                    <label className="form-label">Corps / Grade</label>
                                    <div className="text-sm font-bold">Inspecteur du Travail (Classe Excep.)</div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Lieu d'affectation</label>
                                    <div className="text-sm">Inspection Régionale de Thiès</div>
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label className="form-label">Date de prise de service</label>
                                    <div className="text-sm">12 Octobre 2014</div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Matricule</label>
                                    <div className="text-sm font-bold text-gold">{user.matricule}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-title">📝 Demandes en cours ({currentDemands.length})</div>
                        {currentDemands.length > 0 ? currentDemands.map(demande => (
                            <div key={demande.id} className="alert alert-gold">
                                <div className="alert-icon">⏳</div>
                                <div className="alert-content">
                                    <div className="alert-title">{demande.type}</div>
                                    <div className="alert-sub">Déposée le {demande.date}<br />Étape: Validation N+1 (En cours)</div>
                                </div>
                            </div>
                        )) : (
                            <p className="text-sm text-muted mb-3">Aucune demande en cours.</p>
                        )}
                        <button onClick={() => setShowModal(true)} className="btn btn-primary w-full mt-2">Nouvelle Demande</button>
                    </div>
                </div>

                <div className="card mt-3 fade-up delay-2">
                    <div className="flex-between mb-3">
                        <div className="card-title" style={{ margin: 0 }}>📂 Coffre-Fort Numérique</div>
                        <span className="badge badge-green" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            Certifié Blockchain
                        </span>
                    </div>
                    <div className="table-responsive-wrapper">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Type d'acte</th>
                                <th>Date d'effet</th>
                                <th>Statut</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pastActes.map(acte => (
                                <tr key={acte.id}>
                                    <td>{acte.type}</td>
                                    <td>{acte.date}</td>
                                    <td>
                                        <span className={`badge ${acte.status === 'signe' ? 'badge-green' : 'badge-gray'}`}>
                                            {acte.status === 'signe' ? 'Signé' : 'Archive'}
                                        </span>
                                    </td>
                                    <td><button className="btn btn-outline btn-sm">Voir PDF</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </main>

            {/* Modal for new demand */}
            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="card" style={{ width: '400px', background: 'var(--bg2)' }}>
                        <h3 className="mb-3">Nouvelle Demande</h3>
                        <form onSubmit={handleDemandeSubmit}>
                            <div className="form-group">
                                <label className="form-label">Type de demande</label>
                                <select className="form-control form-select" value={demandeType} onChange={e => setDemandeType(e.target.value)}>
                                    <option>Congé Administratif</option>
                                    <option>Autorisation d'Absence</option>
                                    <option>Demande d'Avancement</option>
                                </select>
                            </div>
                            <div className="flex gap-2" style={{ justifyContent: 'flex-end' }}>
                                <button type="button" onClick={() => setShowModal(false)} className="btn btn-outline">Annuler</button>
                                <button type="submit" className="btn btn-primary">Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Carriere360;
