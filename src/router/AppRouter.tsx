import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BriefcaseScreen from '../pages/modules/briefcases/BriefcaseScreen';
import PresentationScreen from '../pages/modules/presentation/PresentationScreen';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<BriefcaseScreen />} />
            <Route path="/presentacion" element={<PresentationScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRouter;
