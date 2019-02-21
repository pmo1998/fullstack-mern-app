require('./models/registration');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test-app', { useNewUrlParser: true });
let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = require('./app');
const server = app.listen(3001, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
