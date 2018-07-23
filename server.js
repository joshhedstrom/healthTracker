const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3001;
const morgan = require('morgan')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reacthealthtracker");

app.use(morgan('dev'))

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
