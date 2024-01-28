const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const authenticate = require('./auth');

const passport = require('passport');

// author and version from our package.json file
const { author, version } = require('../package.json');

const logger = require('./logger');
const pino = require('pino-http')({
  logger,
});  

// Create an express app instance
const app = express();

// Use pino logging middleware
app.use(pino);





// Use gzip/deflate compression middleware
app.use(compression());

// Set up our passport authentication middleware
passport.use(authenticate.strategy());
app.use(passport.initialize());

// Define our routes
app.use('/', require('./routes'));
// Use helmetjs security middleware
app.use(helmet());

// Use CORS middleware
app.use(cors());




// 404 middleware
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    error: {
      message: 'not found',
      code: 404,
    },
  });
});




// Error-handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'unable to process request';
  if (status > 499) {
    logger.error({ err }, `Error processing request`);
  }
  res.status(status).json({
    status: 'error',
    error: {
      message,
      code: status,
    },
  });
});

module.exports = app;
