const mongoose = require("mongoose");
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/jitter';

const optionsObj = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(connectionString, optionsObj);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected...");
});

module.exports = {
    User: require("./User"),
    Bio: require("./Bio")
}