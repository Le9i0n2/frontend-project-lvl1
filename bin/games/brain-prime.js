#!/usr/bin/env node

import helloUser from '../../src/cli.js';
import primeGame from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = helloUser();
const game = 'brain-prime';
primeGame(userName, game);
