import React, { useState } from 'react';
import Header from '../components/Header';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BudgetSim = () => {
    const [augmentation, setAugmentation] = useState(0);
    const baseBudget = 4.2; // Milliards
    
    // Simulate budget projection
    const data = [
        { annee: '2026 (Actuel)', budget: baseBudget },
        { annee: '2027 (Projeté)', budget: baseBudget * (1 + augmentation / 100) },
        { annee: '2028 (Projeté)', budget: baseBudget * Math.pow(1 + augmentation / 100, 2) }
    ];

    const currentProjected = (baseBudget * (1 + augmentation / 100)).toFixed(2);
    const diff = (currentProjected - baseBudget).toFixed(2);

    return (
        <>
            <Header title="BUDGET'SIM" subtitle="Simulateur Masse Salariale" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Simulation d'Impact <span>Financier</span></h1>
                    <p>Anticipez l'évolution de la masse salariale selon vos décisions.</p>
                </div>

                <div className="grid-12 fade-up delay-1">
                    <div className="card">
                        <div className="card-title">⚙️ Paramètres de simulation</div>
                        
                        <div className="form-group mt-4">
                            <label className="form-label flex-between">
                                <span>Scénario d'augmentation annuelle (en %)</span>
                                <span className="font-bold text-green">+{augmentation}%</span>
                            </label>
                            <input 
                                type="range" 
                                min="0" max="15" step="0.5" 
                                value={augmentation} 
                                onChange={(e) => setAugmentation(Number(e.target.value))}
                                style={{ width: '100%', accentColor: 'var(--green-light)', cursor: 'pointer' }}
                            />
                        </div>

                        <div className="alert alert-gold mt-4">
                            <div className="alert-icon">💡</div>
                            <div className="alert-content">
                                <div className="alert-title">Impact 2027</div>
                                <div className="alert-sub">L'augmentation générera un surcoût de <strong className="text-white">{diff} Milliards FCFA</strong> sur le prochain exercice budgétaire.</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-title">📈 Projection à 3 ans (Milliards FCFA)</div>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <BarChart data={data} margin={{ top: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis dataKey="annee" stroke="rgba(255,255,255,0.5)" />
                                    <YAxis stroke="rgba(255,255,255,0.5)" domain={[0, 6]} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff' }}
                                        formatter={(val) => `${val} Mds FCFA`}
                                    />
                                    <Bar dataKey="budget" fill="#FFCC00" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default BudgetSim;
