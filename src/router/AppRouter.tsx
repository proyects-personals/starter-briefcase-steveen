import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BriefcaseScreen from '../pages/modules/briefcases/BriefcaseScreen';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<BriefcaseScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRouter;
