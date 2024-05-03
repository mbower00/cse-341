// made using code from the course video (https://www.youtube.com/watch?v=K00J87SofEc)

const routes = require('express').Router()
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.alexRoute)
routes.get('/jada', lesson1Controller.jadaRoute)
routes.get('/jonas', lesson1Controller.jonasRoute)
module.exports = routes