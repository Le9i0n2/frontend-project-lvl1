# Makefile

install: # Install ALL dependencies
	npm ci

brain-games: # Start brain games
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint: # Start eslint check
	npx eslint .

setup: # Install dependencies and make possible to use game commands
	npm install --production
	npm link