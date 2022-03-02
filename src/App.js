import React, { useState } from 'react';

import './App.css';
import axios from 'axios';

const App = () => {
  const [pokemon, setPokemon] = useState('Alakazam');
  const [pokemonData] = useState([]);
  const [pokemonType] = useState('');

  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
};

export default App;
