const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const FriendModel = require("./models/Friends");

app.use(express.json())
app.use(cors()) // make the connection between back and front

/// DATABASE CONNECTION
mongoose.connect(
  "mongodb://localhost:27017/mernCourse?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true }
);

// insert a friends
app.post("/addfriend", async (req, res) => {
const name = req.body.name
const age = req.body.age


  const friend = new FriendModel({ name: name, age: age });
  await friend.save();
  res.send("Success");
});

// read friends
app.get("/read", async (req, res) => {
  const result = await FriendModel.find();
  res.json(result);
});

app.listen(3001, () => {
  console.log("You are connected");
});
