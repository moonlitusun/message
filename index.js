if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/message.production.min');
} else {
  module.exports = require('./dist/message.development');
}
