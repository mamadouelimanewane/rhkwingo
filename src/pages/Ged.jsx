import React, { useState } from 'react';
import Header from '../components/Header';
import { Folder, FileText, Search, Download, Eye, FileArchive, Filter } from 'lucide-react';

const Ged = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const documents = [
        { id: 1, nom: 'Arrêté 2026-001 Avancement Fatou Ba.pdf', type: 'Arrêté', date: '2026-07-01', size: '1.2 MB', tags: ['Signé', 'Public'] },
        { id: 2, nom: 'Circulaire_Télétravail_MEFPT.pdf', type: 'Circulaire', date: '2026-06-15', size: '3.4 MB', tags: ['Général'] },
        { id: 3, nom: 'Dossier_Disciplinaire_Anonyme.docx', type: 'Confidentiel', date: '2026-06-10', size: '0.8 MB', tags: ['Restreint'] },
        { id: 4, nom: 'Rapport_Audit_Effectifs_2026.pdf', type: 'Rapport', date: '2026-05-20', size: '15.6 MB', tags: ['Direction'] }
    ];

    const filteredDocs = documents.filter(doc => doc.nom.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <>
            <Header title="E-DOCS" subtitle="Gestion Électronique des Documents (GED)" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Archives & <span>Bases Documentaires</span></h1>
                    <p>Accès centralisé, sécurisé et certifié (Blockchain) à tous les actes de l'État.</p>
                </div>

                <div className="grid-21 fade-up delay-1">
                    {/* Colonne Principale : Explorateur de fichiers */}
                    <div className="card">
                        <div className="flex-between mb-4">
                            <div className="flex gap-2 w-full max-w-md">
                                <div className="form-control flex gap-2 items-center" style={{ padding: '0.5rem 1rem', flex: 1 }}>
                                    <Search size={18} className="text-muted" />
                                    <input 
                                        type="text" 
                                        placeholder="Rechercher un document, mot-clé, matricule..." 
                                        style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' }}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-outline"><Filter size={18} /></button>
                            </div>
                            <button className="btn btn-primary">Nouveau Dossier</button>
                        </div>

                        {/* Arborescence rapide */}
                        <div className="flex gap-4 mb-4" style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
                            <div className="folder-item">
                                <Folder size={32} color="var(--gold)" />
                                <span>Arrêtés & Décrets</span>
                            </div>
                            <div className="folder-item">
                                <Folder size={32} color="var(--blue)" />
                                <span>Dossiers Agents (Individuel)</span>
                            </div>
                            <div className="folder-item">
                                <Folder size={32} color="var(--green)" />
                                <span>Rapports & Audits</span>
                            </div>
                            <div className="folder-item">
                                <FileArchive size={32} color="var(--text3)" />
                                <span>Archives Mortes</span>
                            </div>
                        </div>

                        {/* Liste des fichiers */}
                        <div className="table-responsive-wrapper">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Nom du fichier</th>
                                        <th>Date</th>
                                        <th>Poids</th>
                                        <th>Tags</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredDocs.map(doc => (
                                        <tr key={doc.id}>
                                            <td className="font-bold flex items-center gap-2">
                                                <FileText size={18} className="text-blue" />
                                                {doc.nom}
                                            </td>
                                            <td>{doc.date}</td>
                                            <td>{doc.size}</td>
                                            <td>
                                                <div className="flex gap-1">
                                                    {doc.tags.map((tag, i) => (
                                                        <span key={i} className={`badge ${tag === 'Signé' ? 'badge-green' : tag === 'Restreint' ? 'badge-red' : 'badge-gray'}`}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex gap-1">
                                                    <button className="btn btn-outline btn-sm" title="Aperçu"><Eye size={14} /></button>
                                                    <button className="btn btn-primary btn-sm" title="Télécharger"><Download size={14} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Colonne Droite : Métadonnées / Statistiques */}
                    <div className="flex flex-col gap-4">
                        <div className="card">
                            <div className="card-title">💾 Espace de Stockage (SENUM)</div>
                            <div className="mb-2 flex-between">
                                <span className="font-bold text-xl">1.2 To</span>
                                <span className="text-sm text-muted">/ 5 To</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-fill bg-blue" style={{ width: '24%' }}></div>
                            </div>
                            <ul className="mt-4 text-sm text-muted" style={{ lineHeight: '1.8' }}>
                                <li>📄 PDF (Actes) : 850 Go</li>
                                <li>📊 Tableurs : 120 Go</li>
                                <li>🖼️ Scans/Images : 230 Go</li>
                            </ul>
                        </div>
                        <div className="alert alert-green">
                            <div className="alert-content">
                                <div className="alert-title flex gap-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Authentification Intègre</div>
                                <div className="alert-sub mt-1">L'intégrité de 100% des arrêtés signés est vérifiée en temps réel par la blockchain gouvernementale.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Ged;
