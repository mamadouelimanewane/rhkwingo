import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../context/AppContext';
import { PlayCircle, Award, Clock } from 'lucide-react';

const Academy = () => {
    const { user } = useAppContext();

    const courses = [
        { id: 1, title: 'Éthique & Déontologie dans l\'Administration Publique', duration: '2h 30m', progress: 100, status: 'Terminé' },
        { id: 2, title: 'Initiation à la gestion de projet Agile', duration: '4h 15m', progress: 45, status: 'En cours' },
        { id: 3, title: 'Transformation Numérique de l\'État', duration: '3h 00m', progress: 0, status: 'Nouveau' }
    ];

    return (
        <>
            <Header title="ACADEMY" subtitle="Portail E-Learning" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Espace <span>Formation Continu</span></h1>
                    <p>Développez vos compétences avec nos modules certifiants en ligne.</p>
                </div>

                {user.role === 'directeur' && (
                    <div className="kpi-grid fade-up delay-1 mb-4">
                        <div className="kpi-card blue">
                            <div className="kpi-icon">🎓</div>
                            <div className="kpi-val blue">85%</div>
                            <div className="kpi-lbl">Taux d'achèvement global</div>
                            <div className="kpi-trend up">Excellente progression</div>
                        </div>
                        <div className="kpi-card gold">
                            <div className="kpi-icon">🏅</div>
                            <div className="kpi-val gold">1,450</div>
                            <div className="kpi-lbl">Badges Numériques Délivrés</div>
                        </div>
                    </div>
                )}

                <div className="grid-2 fade-up delay-2">
                    {courses.map(course => (
                        <div className="card" key={course.id}>
                            <div className="flex-between mb-2">
                                <span className={`badge ${course.progress === 100 ? 'badge-green' : course.progress > 0 ? 'badge-gold' : 'badge-gray'}`}>
                                    {course.status}
                                </span>
                                <div className="text-sm text-muted flex gap-1"><Clock size={16} /> {course.duration}</div>
                            </div>
                            <h3 className="mb-3" style={{ fontSize: '1.1rem' }}>{course.title}</h3>
                            
                            <div className="progress-track mb-1" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                <div className={`progress-fill ${course.progress === 100 ? 'pf-green' : 'pf-gold'}`} style={{ width: `${course.progress}%` }}></div>
                            </div>
                            <div className="text-right text-xs text-muted mb-4">{course.progress}%</div>

                            <button className="btn btn-outline w-full" style={{ justifyContent: 'center' }}>
                                {course.progress === 100 ? <><Award size={18} /> Voir le Certificat</> : <><PlayCircle size={18} /> Continuer le module</>}
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Academy;
