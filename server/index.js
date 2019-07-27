const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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
    // TODO: add authenticate
    // Load hash from your password DB.
    // bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    //     // res == true
    // });
    // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    //     // res == false
    // });
    res.send({ api: 'authenticate' });
});

app.post('/api/user', (req, res) => {
    const User = mongoose.model('users');
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        const user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: hashedPassword
        })
            .save()
            .then(
                data =>
                    res.send({
                        status: 200,
                        data: data
                    }),
                err => res.send(err)
            );
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server started on', PORT);
});
