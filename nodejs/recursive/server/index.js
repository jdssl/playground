import http from 'http'
import logger from './../helpers/logger.js'

const routes = {
  '/data:get': (req, res) => {
    res.writeHead(200)
    res.write('data')
    res.end()
  },
  default: (req, res) => {
    res.writeHead(404)
    res.write('Not found')
    res.end()
  }
}

const handler = (req, res) => {
	const { url, method } = req
	const routerKey = `${url}:${method.toLowerCase()}`
	const chosen = routes[routerKey] || routes.default

	return chosen(req, res)
}

http
  .createServer(handler)
  .listen(1203, logger.info('app running at', 1203))
