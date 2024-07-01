import React from 'react';
import './App.css';
import Header from './components/common/header/Header';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
