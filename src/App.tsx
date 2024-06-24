import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
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
