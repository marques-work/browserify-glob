#!/usr/bin/env node
const browserglob = require('../lib/browserify-glob');
const argv = process.argv.slice(2);
browserglob(argv[0]).pipe(process.stdout);
