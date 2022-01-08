'use strict';

const http = require('http');

const routes = {
	'/me:get': (request, response) => {
		response.writeHead(200);
		response.write('Me');

		response.end();
	},
	default: (request, response) => {
		response.writeHead(404);
		response.write('Not Found');

		response.end();
	}
}

const handler = function(request, response) {
	const { url, method } = request;
	const routerKey = `${url}:${method.toLowerCase()}`;
	const chosen = routes[routerKey] || routes.default;

	return chosen(request, response);
}

const api = http
	.createServer(handler)
	.listen(3105, console.log('app running at', 3105));

module.exports = api;
