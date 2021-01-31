const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bioSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    fName: {
      type: String,
    },
    lName: {
      type: String,
    },
    DOB: {
      type: String,
      required: true,
    },
    nickName: String,
  },
  { timestamps: true }
);

const Bio = mongoose.model('Bio', bioSchema);

module.exports = Bio;
