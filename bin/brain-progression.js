#!/usr/bin/env node

import helloUser from '../src/cli.js';
import progressionGame from '../src/index.js';

const userName = helloUser();
const game = 'brain-progression';
progressionGame(userName, game);
