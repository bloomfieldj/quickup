const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => {
  socket.emit("me", socket.id)
})


server.listen(5000, () => console.log("Server is listening on port 5000"))