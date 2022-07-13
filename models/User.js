const { Schema, model, default: mongoose, SchemaTypes } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            },
            message: (props) => `${props.value} invalid email address`,
        },
    },
    thoughts: [
        {
            type: SchemaTypes.ObjectId,
            ref: "Thought"
        },
    ],
    friends: [
        {
            type: SchemaTypes.ObjectId,
            ref: "User"
        },
    ],
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },



});

userSchema.virtual("friendCount").get(function () {
    return `${this.friends.length} friends`;
  });

  module.exports = User;