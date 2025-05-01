import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8081 });

//event
wss.on("connection", function (socket) {
	console.log("user connected");
	socket.send("hello");
	setInterval(() => {
		socket.send("i love ringing bells" + Math.random());
	}, 500);

	socket.on("message", (e) => {
		console.log(e);
	});
});
