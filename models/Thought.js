const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: () => Date.now()
        },
        updatedAt: {
            type: Date,
            default: () => Date.now()
        }
    }
);

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    reactions: [reactionSchema],
});

module.exports = Thought;