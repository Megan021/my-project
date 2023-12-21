const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    role: {
        type: String,
        required:true
    },
    skill: {
        type: [String], // Change the data type to an array of strings
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    messages: [
        {
            name: {
                type: String,
                required:true
            },
            email: {
                type: String,
                required:true
            },
            message: {
                type: String,
                required:true
            } 
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required:true
            }
        }
    ]
})

// Password Hashing / Securing
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

//Generating Token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
};

// Store the message
userSchema.methods.addMessage = async function(name,email,message) {
    try {
        this.messages = this.messages.concat({name,email,message});
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error);
    }
}


const User = mongoose.model('USER', userSchema);
module.exports = User;