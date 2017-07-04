# ReactiveStart

ReactiveStart is a simple boilerplate for instant development start with react.js.

## Features
* react.js
* webpack
* sass
* live reload
* generating all code and resources into `dist` folder at the build time

### Installing
```
npm install
```

### Usage / Development mode
```
npm start
```

Open a browser at http://localhost:3000

### Build / Production mode
```
npm run build
```

See the `dist` directory under a project root

### Directory structure 
```
|____src
| |____constants.scss       // constants for styles
| |____modules                // place to add own modules
| | |____main                    // example module (component)
| | | |____logo.svg
| | | |____main.scss
| | | |____main.js
| |____style.scss               // common styles
| |____index.js                 // entry point
|____.babelrc
|____README.md
|____.gitignore
|____package.json
|____webpack.config.js
|____.editorconfig
|____index.html
```
