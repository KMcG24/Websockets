var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  socket.on("SEND_MESSAGE", function(msg) {
    console.log(msg);
    io.emit("RECEIVE_MESSAGE", msg);
  });
});

http.listen(5001, function() {
  console.log("listening on *:5001");
});
