const chalk = require('chalk')
const figures = require('figures')

/* eslint-disable */
// Need to support Node versions that don't support spreading function arguments
const spread = fn => function () {
  return fn([].slice.call(arguments))
}

exports.log = console.log.bind(console)

exports.error = spread(messages => {
  console.error(chalk.red(...[figures.cross].concat(messages)))
})

exports.info = spread(messages => {
  console.info(chalk.cyan(...[figures.info].concat(messages)))
})

exports.success = spread(messages => {
  console.log(chalk.green(...[figures.tick].concat(messages)))
})

exports.warn = spread(messages => {
  console.warn(chalk.yellow(...[figures.warning].concat(messages)))
})
/* eslint-enable */
