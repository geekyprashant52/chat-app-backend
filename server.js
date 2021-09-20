// const express = require("express");
// const cors = require("cors");
// const app = express();
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);
// const port = 8111;

// app.use(express());
// app.use(cors());

// //EVENT LISTENERS

// let clientArray = [];
// const users = {};

// io.on("connection", (socket) => {
//   // io.sockets.on("connect", (cl) => {
//   //   clientArray.push(cl.id);
//   //   console.log(clientArray);
//   // });
//   socket.on("new-user", (newUserData) => {
//     users[socket.id] = newUserData;
//     let isPresent = false;
//     if (clientArray.length === 0) {
//       clientArray.push(newUserData);
//     }
//     for (let i = 0; i < clientArray.length; i++) {
//       if (newUserData.name === clientArray[i].name) {
//         isPresent = true;
//       }
//     }
//     if (!isPresent) {
//       clientArray.push(newUserData);
//     }

//     // newUserData[socket.id] = users;
//     let data = {
//       data: newUserData,
//       usersList: clientArray,
//     };
//     io.emit("user-connected", data);
//     io.emit("user-count", clientArray);
//   });

//   let data = { id: socket.id };
//   socket.emit("set_id", data);
//   socket.on("send_message", (body) => {
//     io.emit("message", body);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected");
//     clientArray = clientArray.filter(
//       (item) => users[socket.id].name !== item.name
//     );
//     delete users[socket.id];
//     io.emit("user-disconnected", clientArray);
//   });
// });

// server.listen(port, () => {
//   console.log("Server Started at port: " + port);
// });

// // const WebSocket = require("ws");

// // const wss = new WebSocket.Server(
// //   {
// //     port: 8080,
// //   },
// //   () => {
// //     console.log("Websocket ready!");
// //   }
// // );

// // wss.on("connection", (ws) => {
// //   console.log("New Client Connected");
// //   ws.on("new-user", (newUserData) => {
// //     users[socket.id] = newUserData;
// //     let isPresent = false;
// //     if (clientArray.length === 0) {
// //       clientArray.push(newUserData);
// //     }
// //     for (let i = 0; i < clientArray.length; i++) {
// //       if (newUserData.name === clientArray[i].name) {
// //         isPresent = true;
// //       }
// //     }
// //     if (!isPresent) {
// //       clientArray.push(newUserData);
// //     }
// //     let data = {
// //       data: newUserData,
// //       usersList: clientArray,
// //     };
// //     ws.emit("user-connected", data);
// //     ws.emit("user-count", clientArray);
// //   });

// //   let data = { id: ws.id };
// //   ws.emit("set_id", data);
// //   ws.on("send_message", (body) => {
// //     ws.emit("message", body);
// //   });

// //   ws.on("disconnect", () => {
// //     console.log("User Disconnected");
// //     clientArray = clientArray.filter(
// //       (item) => users[socket.id].name !== item.name
// //     );
// //     delete users[socket.id];
// //     ws.emit("user-disconnected", clientArray);
// //   });

// //   // ws.send("ws server started!");
// //   // ws.on("message", (data) => {
// //   //   ws.send(`server: ${data}`);
// //   // });
// // });

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to homePage");
});

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
