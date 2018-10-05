const chalk = require("chalk");

/**
 * Simple logging functions
 *
 * Used purely for development
 * In production, set environment variable DEBUG to FALSE
 */

export const success = (...log) => {
  if (process.env.DEBUG === "TRUE") {
    console.log(chalk.default.white.bgCyan.bold(...log));
  }
};

export const warning = (...log) => {
  if (process.env.DEBUG === "TRUE") {
    console.log(chalk.default.white.bgYellow.bold(...log));
  }
};

export const error = (...log) => {
  if (process.env.DEBUG === "TRUE") {
    console.error(chalk.default.white.bgMagenta.bold(...log));
  }
};

export const log = (...log) => {
  if (process.env.DEBUG === "TRUE") {
    console.log(chalk.default.white.bgWhite.bold(...log));
  }
};
