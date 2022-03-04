#!/usr/bin/env node

import helloUser from '../src/cli.js';
import gcdGame from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = helloUser();
const game = 'brain-gcd';
gcdGame(userName, game);
