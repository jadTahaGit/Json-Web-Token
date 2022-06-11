const express = require('express');
const mongoose = require('mongoose');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI =
  'mongodb+srv://jadtaha:8JlOTrtdfH1u@cluster0.imrf7.mongodb.net/node-auth?';
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log('DB connected Successfully');
    console.log('Listining on Server 4001');
    app.listen(4001);
  })
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
