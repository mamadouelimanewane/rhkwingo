import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Carriere360 from './pages/Carriere360';
import Actes from './pages/Actes';
import Mirador from './pages/Mirador';
import BienEtre from './pages/BienEtre';

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
      </Route>
    </Routes>
  );
}

export default App;
