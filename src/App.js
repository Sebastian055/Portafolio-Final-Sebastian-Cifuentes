import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import Pagina4 from './pages/Pagina4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Pagina1" element={<Pagina1 />} />
        <Route path="/Pagina2" element={<Pagina2 />} />
        <Route path="/Pagina3" element={<Pagina3 />} />
        <Route path="/Pagina4" element={<Pagina4 />} />
        <Route path="/" element={<Navigate to="/Pagina1" />} />
      </Routes>
    </Router>
  );
}

export default App;
