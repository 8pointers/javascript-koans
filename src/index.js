import './style.css';
import jQuery from 'jquery';
import 'jquery-ui';
import GameOfLife from './0-dont-peek/8-observable/2-game-of-life';

jQuery('#gameOfLifeWidget').gameOfLifeWidget(new GameOfLife(), 10, 10, 250);
