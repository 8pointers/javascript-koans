import './style.css';
import jQuery from 'jquery';
import 'jquery-ui-dist/jquery-ui.js';
import GameOfLife from './0-dont-peek/8-observable/2-game-of-life.js';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

jQuery('#gameOfLifeWidget').gameOfLifeWidget(new GameOfLife(), 10, 10, 250);

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
createRoot(document.getElementById('root')).render(<Counter />);
