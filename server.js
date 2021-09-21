const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
require("dotenv").config();
const port = process.env.PORT || 8282;

app.use(express());
app.use(cors());

//EVENT LISTENERS

let clientArray = [];
const users = {};

let getCurrentTime = () => {
  return new Date().toLocaleTimeString();
};

io.on("connection", (socket) => {
  socket.on("new-user", (newUserData) => {
    users[socket.id] = newUserData;
    let isPresent = false;
    if (clientArray.length === 0) {
      clientArray.push(newUserData);
    }
    for (let i = 0; i < clientArray.length; i++) {
      if (newUserData.name === clientArray[i].name) {
        isPresent = true;
      }
    }
    if (!isPresent) {
      clientArray.push(newUserData);
    }

    let data = {
      data: newUserData,
      usersList: clientArray,
    };
    io.emit("user-connected", data);
    io.emit("user-count", clientArray);
  });

  let data = { id: socket.id };
  socket.emit("set_id", data);
  socket.on("send_message", (body) => {
    io.emit("message", body);
  });

  socket.on("disconnect", () => {
    clientArray = clientArray.filter(
      (item) => users[socket.id].name !== item.name
    );
    console.log("User Disconnected");
    let disconnectObj = { name: users[socket.id].name, time: getCurrentTime() };
    io.emit("show-disconnect", disconnectObj);
    io.emit("user-disconnected", clientArray);
    setTimeout(() => {
      delete users[socket.id];
    }, 2000);
  });
});

server.listen(port, () => {
  console.log("Server Started at port: " + port);
});
