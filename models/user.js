const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Email address must follow the pattern: "example@info.com"'],
            // https://mongoosejs.com/docs/validation.html
        },

        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "thought"
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "user"
        }],
    },

    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
})
const User = model('user', userSchema);

module.exports = User;