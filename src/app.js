const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./model/User');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mongoJest", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // console.log("Conectado com o banco");
  })
  .catch(err => {
    console.log(err);
  });

const User = mongoose.model('User', user);

app.get('/', (req, res) => {
  res.json({ message: true });
});

app.post('/user', async (req, res) => {
  if (req.body.name == "" || req.body.email == "" || req.body.password == "") {
    res.status(400).json({ error: "Coloque as credenciais pedidas" });
    return;
  }
  try {
    const newUser = new User({ name: req.body.name, email: req.body.email, password: req.body.password });
    await newUser.save();
    res.json({ email: req.body.email });
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = app;
