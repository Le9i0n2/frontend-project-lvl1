#!/usr/bin/env node

import helloUser from '../src/cli.js';
import calcGame from '../src/index.js';

const userName = helloUser();
const game = 'brain-calc';
calcGame(userName, game);
