const express    = require("express");
const app        = express();
const promClient = require('prom-client');

let server;

let requestSuccess = new promClient.Counter({
	name: "request_success",
	help: "Successful Request Count"
});

let requestFailed = new promClient.Counter({
	name: "request_failed",
	help: "Failed Request Count"
});

app.get("/", (req, res) => {
	res.json({ message: `${new Date} Yolos! It's working`});
	requestSuccess.inc(1);
});

app.get("/fail", (req, res) => {
	res.json({ message: `${new Date} Oops! It's not working`});
	requestFailed.inc(1);
});

app.get("/metrics", (req, res) => {
	res.end(promClient.register.metrics());
});

module.exports = {
	start(cb) {
		server = app.listen(3000, () => {
			console.log("HTTP server listening on port 3000");
			cb();
		});
	},
	stop (cb) {
		server.close(cb);
	}
};
