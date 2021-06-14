'use strict'

const client = require('./connection')

const findAll = async () => {
	try {
		const { rows: persons } = await client.query('SELECT * FROM persons')

		return persons
	} catch (e) {
		throw new Error(`FindAll failed: ${e.message}`)
	}
}

;(async () => {
	await client.connect()

	const persons = await findAll()

	console.log('findAll', persons)

	await client.end()
})()
