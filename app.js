const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');

const port = process.env.PORT || 5000;
const authController = require('./controllers/authController');

mongoose.connect(config.getDbConnectionString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

authController(app);
app.listen(port);
