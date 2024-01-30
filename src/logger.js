// src/logger.js

let options = {};

// Check if process object is available (running in Node.js environment)
if (typeof process !== 'undefined' && process.env) {
  // Use `info` as our standard log level if not specified
  options = { level: process.env.LOG_LEVEL || 'info' };

  // If we're doing `debug` logging, make the logs easier to read
  if (options.level === 'debug') {
    // https://github.com/pinojs/pino-pretty
    options.transport = {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    };
  }
}

// Create and export a Pino Logger instance:
// https://getpino.io/#/docs/api?id=logger
module.exports = require('pino')(options);
