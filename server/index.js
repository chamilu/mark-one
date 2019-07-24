const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const keys = require('./config/keys'); // TODO: set to handle environment vars.

// Load mongoose models
require('./models/User');

mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGODB_URL, { useNewUrlParser: true }, () => {
    console.log('===== mongodb connected =====');
});

// middlewares
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({ name: 'chamil udayanga' });
});

app.post('/api/authenticate', (req, res) => {
    // TODO: move this functionality to register api.
    // this is just to test db connectivity and etc.
    const User = mongoose.model('users');
    const user = new User({
        username: req.body.username,
        password: req.body.password
    }).save();

    user.then(
        data => {
            res.send({ name: 'chamil udayanga, this working', data });
        },
        err => {
            res.send({ name: 'issue occured' });
        }
    );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server started on', PORT);
});
