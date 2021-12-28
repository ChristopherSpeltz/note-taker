const fs = require("fs");
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
// const { animals } = require("./data/db/db");
const { notes } = require('./db/db');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});