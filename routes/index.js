// made using course video

const routes = require('express').Router()
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.alexRoute)
routes.get('/jada', lesson1Controller.jadaRoute)
routes.get('/jonas', lesson1Controller.jonasRoute)

module.exports = routes