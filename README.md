# browserify-glob
> simple glob pattern handling for browserify

pass glob patterns to [`browserify`](https://github.com/substack/node-browserify). just a simple wrapper, output is the same as that
of the vanilla [`browserify`](https://github.com/substack/node-browserify) usage.

## installation
`$ npm install browserify-glob --save-dev`

## usage
### cli
`$ browserify-glob **/*.spec.js > specs.js`

`$ browserify-glob **/*.spec.js | tap-closer | smoker | tap-dots` :rocket:

### node
```js
const browserglob = require('browserify-glob');

browserglob('**/*.spec.js')
  .pipe(process.stdout);
```

## license
mit @ [kasper lewau](https://github.com/kasperlewau)

