const mongoose = require("mongoose");
// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
});

// To use our schema definition, we need to convert our userSchema into a Model we can work with.
const Users = new mongoose.model("Users", userSchema);
module.exports = Users;
