const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const api = require('./routes');
const cors = require('cors');

// Middlewares

<<<<<<< HEAD
let url
if (process.env.NODE_ENV === 'production') {
  url = `mongodb://hackporunacausa:12345678@ds147480.mlab.com:47480/hackporunacausa`
} else {
  url = 'mongodb://localhost:27017/hackporunacausa'
}

mongoose.connect(url, (err) => {
  if (err) console.log(`Connection to database failed, ${err}`)

=======
mongoose.connect('mongodb://localhost:27017/hackporunacausa', (err) => {
  if (err) console.log(`Connection to database failed, ${err}`);
>>>>>>> 04ebbdcce0a3aee406edcaf3d8bb5b8a0658ba17
  console.log(`Database connection established`)
});

mongoose.Promise = global.Promise;

app.use(cors()); // Disables CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', api);

app.listen(3000, () => 'App listening on port: 3000');
