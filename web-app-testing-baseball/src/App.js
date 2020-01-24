import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {

  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);

  const addStrikes = currentStrikes => {
    if (currentStrikes >= 2) {
      setStrikeCount(0);
      setBallCount(0);
    }
    else {
      setStrikeCount(strikeCount +1);
    }
  }

  const addBalls = currentBalls => {
    if (currentBalls >= 3) {
      setBallCount(0);
      setStrikeCount(0);
    }
    else {
      setBallCount(currentBalls +1)
    }
  }

  const addHit = () => {
    setStrikeCount(0);
    setBallCount(0);
  }

  const addFoul = currentFoul => {
    if (currentFoul < 2) {
      setStrikeCount(currentFoul +1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kiran's Baseball Count</h1>
      </header>
      <Display strikeCount={strikeCount} ballCount={ballCount} />
      <Dashboard
       addStrikes={addStrikes} addBalls={addBalls}  addHit={addHit} addFoul={addFoul} strikeCount={strikeCount} ballCount={ballCount}
       />
    </div>
  );
}

export default App;
