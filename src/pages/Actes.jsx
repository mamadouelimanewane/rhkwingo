import React, { useState } from 'react';
import Header from '../components/Header';
import { useAppContext } from '../context/AppContext';

const Actes = () => {
    const { actes, validerActe } = useAppContext();
    const [filter, setFilter] = useState('Tous les types');

    const pendingActes = actes.filter(a => a.status === 'attente');
    const filteredActes = filter === 'Tous les types' ? pendingActes : pendingActes.filter(a => a.type.includes(filter));

    return (
        <>
            <Header title="e-Actes" subtitle="Dématérialisation & Workflow" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Bannette : <span>Actes à traiter</span></h1>
                </div>
                
                <div className="card fade-up delay-1">
                    <div className="flex-between mb-3">
                        <div className="card-title" style={{ margin: 0 }}>📋 Dossiers en attente ({pendingActes.length})</div>
                        <div className="flex gap-1">
                            <input type="text" className="form-control" placeholder="Rechercher matricule..." style={{ width: '200px', padding: '0.4rem 0.8rem' }} />
                            <select className="form-control form-select" value={filter} onChange={e => setFilter(e.target.value)} style={{ width: '170px', padding: '0.4rem 0.8rem' }}>
                                <option>Tous les types</option>
                                <option>Congé</option>
                                <option>Avancement</option>
                                <option>Attestation</option>
                            </select>
                        </div>
                    </div>
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Matricule</th>
                                <th>Nom Agent</th>
                                <th>Type d'acte</th>
                                <th>Date dépôt</th>
                                <th>SLA Restant</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredActes.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center text-muted">Aucun acte en attente pour le moment.</td>
                                </tr>
                            )}
                            {filteredActes.map(acte => (
                                <tr key={acte.id}>
                                    <td className="font-bold">{acte.matricule}</td>
                                    <td>{acte.nom}</td>
                                    <td>{acte.type}</td>
                                    <td>{acte.date}</td>
                                    <td>
                                        <span className={`badge ${acte.sla > 5 ? 'badge-green' : acte.sla > 1 ? 'badge-gold' : 'badge-red'}`}>
                                            {acte.sla} Jours
                                        </span>
                                    </td>
                                    <td>
                                        <button onClick={() => validerActe(acte.id)} className="btn btn-primary btn-sm">Valider & Signer</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default Actes;
