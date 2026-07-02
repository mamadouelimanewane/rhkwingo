import React from 'react';
import Header from '../components/Header';
import { MapPin, Briefcase } from 'lucide-react';

const BourseEmploi = () => {
    const jobs = [
        { id: 1, title: 'Chef de Division RH', ministere: 'Ministère de la Santé', location: 'Dakar', type: 'Mutation', match: 92 },
        { id: 2, title: 'Inspecteur du Travail (Chef Secteur)', ministere: 'MEFPT', location: 'Ziguinchor', type: 'Promotion interne', match: 88 },
        { id: 3, title: 'Chargé d\'Études Juridiques', ministere: 'Ministère des Finances', location: 'Dakar', type: 'Détachement', match: 75 }
    ];

    return (
        <>
            <Header title="MOBILITÉ" subtitle="Bourse de l'Emploi Interne" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>GÉO-POSTES <span>Mobilité</span></h1>
                    <p>Découvrez les offres internes correspondant à votre profil de compétences.</p>
                </div>

                <div className="grid-2 fade-up delay-1">
                    {jobs.map(job => (
                        <div className="card" key={job.id} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="flex-between mb-2">
                                <span className="badge badge-gold">{job.type}</span>
                                <span className="text-sm font-bold text-green">Match {job.match}%</span>
                            </div>
                            <h3 className="mb-2" style={{ fontSize: '1.2rem' }}>{job.title}</h3>
                            <div className="text-muted text-sm mb-1 flex gap-1"><Briefcase size={16} /> {job.ministere}</div>
                            <div className="text-muted text-sm mb-4 flex gap-1"><MapPin size={16} /> {job.location}</div>
                            
                            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                                <button className="btn btn-outline" style={{ flex: 1 }}>Voir Fiche Poste</button>
                                <button className="btn btn-primary" style={{ flex: 1 }}>Postuler</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default BourseEmploi;
