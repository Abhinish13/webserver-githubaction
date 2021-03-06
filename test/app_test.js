const app     = require('../app');
const request = require('request');

describe('health check', function() {
	it('should start', function(done) {
		app.start(done);
	});

	it('should respond', function(done) {
		const req = {
			json: true,
			uri: 'http://localhost:3000/',
		};

		request.get(req, (error, res, body) => {
			if (error) return done(error);
			if (res.statusCode !== 200) return done(new Error(`oh no! ${res.statusCode}`));
			console.log('body', body);
			done();
		});

	});

	it('should stop', function(done) {
		app.stop(done);
	});
});
