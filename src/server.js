const express = require("express");
const morgan = require("morgan");

class Server {
	constructor(port) {
		this.app = express();

		this.middlewares();
		this.routes();
		this.listen(port)
	};

	middlewares() {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(morgan("dev"));
	};

	routes() {
		this.app.use(require("./routes"));
	};

	listen(port) {
		this.app.listen(port);
	};
};

new Server(3000);