# Nightwatch.js Demo

This is a demonstration of automated acceptance testing using the [nightwatch.js](http://nightwatchjs.org/) framework.

## Installing

Note: This requires a recent version of the [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) to be installed!

1. Fork and clone
1. `yarn` (or `npm install` if you're a square)
1. `npm run dev` to start the Barkwire web app. It will be available at [http://localhost:3000](http://localhost:3000).
1. In another shell, `npm run install-selenium` to install Selenium WebDriver, then `npm run selenium` to start it
1. In yet another shell, `npm test` to run your automated acceptance test.
1. Star the repo because it was so helpful!

## Experimenting

1. This demo uses the [phantom.js](http://phantomjs.org/) headless browser. The `nightwatch.json` file is where you configure the tests for other browsers (Chrome, Firefox, Safari, etc.)
1. The test spec in `tests/add-puppy.js` should give an idea of how these tests are written. The [API for nightwatch](http://nightwatchjs.org/api) is simple to learn, and the resulting tests are extremely readable.
1. There's a small amount of magic happening in the npm scripts- check out the `scripts` hash in `package.json` to see how they work. They can be even _more_ magical by adding something like [`watch`](https://www.npmjs.com/package/watch) to automatically run your tests whenever your app files or tests change.
1. It's a pretty paint-by-numbers Express app. It uses [knex](http://knexjs.org/) to abstract out all the database stuff, which is all stored locally in a [SQLite3](https://www.sqlite.org/) embedded database. It also uses [Handlebars](http://handlebarsjs.com/) and [SCSS](http://sass-lang.com/).

## Other resources

* [Slide Deck about this repo](http://slides.com/kylecoberly/automated-acceptance-testing)
* [kylecoberly.com](http://www.kylecoberly.com)
