## Regalix Test Project

A basic Angular 5 to do app, using:

* Angular 5.2.10
* TypeScript 2.5
* Karma/Jasmine
* Codelyzer & TSLint
* SASS/SCSS
* Webpack 3

### Commands

* `npm start` - start the development webpack server (access via http://localhost:3000/)
* `npm test` - run the project unit tests (*.spec.ts files)
* `npm run coverage` - run the project unit tests one time and print out a coverage report, generated under **/coverage/index.html**
* `npm run lint` - run the project linting (will be run every time `npm test` is run)
* `npm run build` - generate a production build for the project, which will be inserted into dist/
* `npm run server` - run a live-server instance off of the **dist/** directory (generated from the `build` command)
