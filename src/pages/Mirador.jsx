import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Header from '../components/Header';

const Mirador = () => {
    const ageData = [
        { name: '20-30', value: 1200 },
        { name: '31-40', value: 4350 },
        { name: '41-50', value: 5000 },
        { name: '51+', value: 1600 }
    ];

    const genderData = [
        { name: 'Hommes', value: 58 },
        { name: 'Femmes', value: 42 }
    ];
    const COLORS = ['#00c857', '#FFCC00'];

    return (
        <>
            <Header title="MIRADOR+" subtitle="Analytics Avancé" />
            <main className="main">
                <div className="page-header fade-up">
                    <h1>Analyse des <span>Effectifs</span></h1>
                </div>
                
                <div className="grid-2 fade-up delay-1">
                    <div className="card">
                        <div className="card-title">Répartition par Tranche d'Âge</div>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <BarChart data={ageData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                                    <YAxis stroke="rgba(255,255,255,0.5)" />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff' }}
                                        itemStyle={{ color: '#00c857' }}
                                    />
                                    <Bar dataKey="value" fill="#00c857" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="alert alert-gold mt-4">
                            <div className="alert-icon">💡</div>
                            <div className="alert-content">
                                <div className="alert-title">Alerte PRÉDIC'RH</div>
                                <div className="alert-sub">13% des effectifs cadres partent à la retraite d'ici 5 ans. Plan de succession requis (COMPÉT'MAP).</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-title">Répartition Homme / Femme</div>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={genderData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={110}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {genderData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff' }}
                                        formatter={(value) => `${value}%`}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex-center" style={{ justifyContent: 'center', gap: '2rem' }}>
                            <div className="text-center">
                                <span style={{ display: 'inline-block', width: 12, height: 12, background: COLORS[0], borderRadius: '50%', marginRight: 5 }}></span>
                                Hommes (58%)
                            </div>
                            <div className="text-center">
                                <span style={{ display: 'inline-block', width: 12, height: 12, background: COLORS[1], borderRadius: '50%', marginRight: 5 }}></span>
                                Femmes (42%)
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Mirador;
