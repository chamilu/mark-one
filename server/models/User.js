const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String
});

mongoose.model('users', userSchema);
