const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Hello World!"));

var server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

var io = require("socket.io").listen(server);
var connectedUsers = {};
io.on("connection", socket => {
  console.log("new connection made.");
  let handshake = socket.handshake;
  console.log("handshake", handshake.time);

  socket.on("message", function(chatObject) {
    console.log(JSON.stringify(connectedUsers));
    console.log(
      `message ${chatObject.message.messages} is sending from ${
        chatObject.loggedInUser.firstName
      } ${connectedUsers[chatObject.loggedInUser.firstName]} to ${
        chatObject.activeChatUser.firstName
      } ${connectedUsers[chatObject.activeChatUser.firstName]}`
    );
    io.in(connectedUsers[chatObject.activeChatUser.firstName]).emit(
      "new message",
      chatObject
    );
  });

  socket.on("mapSocketWithUser", function(loggedInUser) {
    connectedUsers[loggedInUser.firstName] = socket.id;
    console.log(
      `step2 connectedUser: ${loggedInUser.firstName}`,
      connectedUsers[loggedInUser.firstName]
    );
  });
});
