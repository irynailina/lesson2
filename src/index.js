import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

const fruits = {apple: 10, graps: 12}

const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Lego_bricks.jpg/274px-Lego_bricks.jpg"

ReactDOM.render(
  <App step={10} img={img} addFruits={fruits}/>,
  document.getElementById('root')
);
