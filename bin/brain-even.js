#!/usr/bin/env node

import helloUser from '../src/cli.js';
import evenGame from '../src/evenGame.js';

console.log('Welcome to the Brain Games!');
const userName = helloUser();
evenGame(userName);
