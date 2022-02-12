# Makefile

install: # Install ALL dependencies
	npm ci

brain-games: # Start brain games
	node bin/brain-games.js
