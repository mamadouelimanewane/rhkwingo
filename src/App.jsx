import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Carriere360 from './pages/Carriere360';
import Actes from './pages/Actes';
import Mirador from './pages/Mirador';
import BienEtre from './pages/BienEtre';
import BudgetSim from './pages/BudgetSim';
import Academy from './pages/Academy';
import Innovation from './pages/Innovation';
import BourseEmploi from './pages/BourseEmploi';
import Ged from './pages/Ged';
import Workflows from './pages/Workflows';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/carriere360" element={<Carriere360 />} />
        <Route path="/mes-demandes" element={<Carriere360 />} />
        <Route path="/actes" element={<Actes />} />
        <Route path="/mirador" element={<Mirador />} />
        <Route path="/bien-etre" element={<BienEtre />} />
        <Route path="/budget-sim" element={<BudgetSim />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/bourse-emploi" element={<BourseEmploi />} />
        <Route path="/ged" element={<Ged />} />
        <Route path="/workflows" element={<Workflows />} />
      </Route>
    </Routes>
  );
}

export default App;
