import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BriefcaseScreen from '../pages/modules/briefcases/BriefcaseScreen';
import PresentationScreen from '../pages/modules/presentation/PresentationScreen';
import GameScreen from '../pages/modules/game/GameScreen';
import WorkExperienceScreen from '../pages/modules/presentation/WorkExperienceScreen';
import MyStudiesScreen from '../pages/modules/presentation/MyStudiesScreen';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<BriefcaseScreen />} />
            <Route path="/presentacion" element={<PresentationScreen />} />
            <Route path="/game" element={<GameScreen />} />
            <Route path="/experience" element={<WorkExperienceScreen />} />
            <Route path="/studies" element={<MyStudiesScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRouter;
