const mongoose = require("mongoose");
const keys = require("../config/keys");

const connectionString = `mongodb+srv://subodh1:${keys.mongodbPassword}@cluster0.yqn0k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectToDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      autoIndex: true,
    });
    console.log("Connected to Mongodb Atlas");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectToDB;
