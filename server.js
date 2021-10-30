const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    // origin: "http://localhost:3000",
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const users = {};

app.use(cors());

app.get("/video", (req, res) => {
  res.send('server is running on port 5k')
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit("callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });

});


server.listen(5000, () => console.log("Server is listening on port 5000"))