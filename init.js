//this file has initial data for the DB

const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main()
  .then(() => {
    console.log("connection sucessfull");
  })

  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatStar");
}

let allChats = [
  {
    from: "King",
    to: "Queen",
    msg: "Welcome to MY verse...",
    created_at: new Date(),
  },
  {
    from: "Queen",
    to: "King",
    msg: "I accept your challenge.",
    created_at: new Date(),
  },
  {
    from: "Knight",
    to: "King",
    msg: "The kingdom is secure.",
    created_at: new Date(),
  },
];

// Insert into MongoDB
Chat.insertMany(allChats);
