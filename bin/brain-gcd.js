#!/usr/bin/env node

import helloUser from '../src/cli.js';
import gcdGame from '../src/index.js';

const userName = helloUser();
const game = 'brain-gcd';
gcdGame(userName, game);
