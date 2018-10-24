if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/Message.production.min');
} else {
  module.exports = require('./dist/Message.development');
}
