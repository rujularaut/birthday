import React from 'react';
import './App.css';
import Header from './components/Header';
import SportsList from './components/SportsList';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SportsList />
      <Stats />
      <Footer />
      <header>
        <h1>🏏 Urvija — The All-Rounder!</h1>
        <p>Celebrating 18 Years of Awesomeness</p>
      </header>

      <section>
        <h2>Featured Sports</h2>
        <ul>
          <li>🏏 Cricket</li>
          <li>🛼 Roll Ball</li>
          <li>🏃 Running</li>
          <li>🚴 Cycling</li>
          <li>🏊 Swimming</li>
        </ul>
      </section>

      <section>
        <h2>Stats</h2>
        <p>6s hit: 2,035</p>
        <p>Speed: ⚡ Flash level</p>
      </section>
    </div>
  );
}

export default App;
