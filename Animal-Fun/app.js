import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const animalFacts = <h1>{title === '' ? 'Click an animal for fun fact' : title}</h1>;

ReactDOM.render(animalFacts, document.getElementById('root'));