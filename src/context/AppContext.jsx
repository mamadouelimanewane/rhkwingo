import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    // Mobile Menu State
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Session state
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('rh_user');
        return saved ? JSON.parse(saved) : null;
    });

    // Notifications state
    const [notifications, setNotifications] = useState(3);

    // Actes state
    const [actes, setActes] = useState(() => {
        const saved = localStorage.getItem('rh_actes');
        return saved ? JSON.parse(saved) : [
            { id: 1, matricule: '605112/C', nom: 'Ousmane Diallo', type: 'Congé Administratif', date: '2026-06-28', sla: 2, status: 'attente' },
            { id: 2, matricule: '700010/B', nom: 'Fatou Ba', type: 'Avancement', date: '2026-07-01', sla: 14, status: 'attente' },
            { id: 3, matricule: '589221/A', nom: 'Amadou Sow', type: 'Attestation Travail', date: '2026-07-02', sla: 1, status: 'attente' },
            { id: 4, matricule: '700010/B', nom: 'Fatou Ba', type: 'Congé Administratif', date: '2026-06-28', sla: 0, status: 'attente' }, // Demande en cours pour Fatou
            { id: 5, matricule: '700010/B', nom: 'Fatou Ba', type: 'Arrêté d\'Avancement', date: '2025-01-01', sla: 0, status: 'signe' },
            { id: 6, matricule: '700010/B', nom: 'Fatou Ba', type: 'Attestation de Présence', date: '2026-06-15', sla: 0, status: 'signe' },
            { id: 7, matricule: '700010/B', nom: 'Fatou Ba', type: 'Décision d\'Affectation', date: '2014-10-12', sla: 0, status: 'archive' }
        ];
    });

    // Save to localStorage when state changes
    useEffect(() => {
        if (user) {
            localStorage.setItem('rh_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('rh_user');
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem('rh_actes', JSON.stringify(actes));
    }, [actes]);

    const login = (matricule, role) => {
        const newUser = {
            matricule,
            nom: role === 'agent' ? 'Fatou Ba' : 'Abdoul Aziz Sylla',
            role,
            division: role === 'agent' ? 'Inspection du Travail' : 'Direction'
        };
        setUser(newUser);
    };

    const logout = () => {
        setUser(null);
    };

    const addDemande = (type) => {
        const newDemande = {
            id: Date.now(),
            matricule: user.matricule,
            nom: user.nom,
            type,
            date: new Date().toISOString().split('T')[0],
            sla: 7,
            status: 'attente'
        };
        setActes([newDemande, ...actes]);
    };

    const validerActe = (id) => {
        setActes(actes.map(a => a.id === id ? { ...a, status: 'signe' } : a));
    };

    return (
        <AppContext.Provider value={{
            user, login, logout,
            actes, addDemande, validerActe,
            notifications, setNotifications,
            isMobileMenuOpen, setIsMobileMenuOpen
        }}>
            {children}
        </AppContext.Provider>
    );
};
