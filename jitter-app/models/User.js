const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: Date.now,
    },
    // jwt: {
    //     Tokens
    // }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
