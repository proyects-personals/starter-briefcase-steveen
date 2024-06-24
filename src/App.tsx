import React from 'react';
import './App.css';
import Header from './components/common/header/Header';
import Briefcase from './pages/modules/briefcases/Briefcase';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Briefcase />
      </main>
    </div>
  );
}

export default App;
