const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const passport = require("passport");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

mongoose
.connect(config.getDbConnectionString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB connected'))
.catch((err) => console.log(err));

const authController = require('./controllers/api/authController');

app.use(passport.initialize());
app.use("/api/users", authController);


app.listen(process.env.PORT || 5000);
