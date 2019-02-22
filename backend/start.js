require('./models/registration');
require('./models/data');
const mongoose = require('mongoose');
const db='mongodb://localhost:27017/test-app';
mongoose.connect(db, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${db}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});

const app = require('./app');
const server = app.listen(3001, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
