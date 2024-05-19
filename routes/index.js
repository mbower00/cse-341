// made using code from the course video (https://www.youtube.com/watch?v=K00J87SofEc)

const routes = require('express').Router()
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.alexRoute)
routes.get('/jada', lesson1Controller.jadaRoute)
routes.get('/jonas', lesson1Controller.jonasRoute)

const addContactsRoutes = require('./contacts')
addContactsRoutes(routes)

// the next four lines are copied from (although I did change the route for "swaggerDocument" as well as changed to using the "routes" const) https://www.npmjs.com/package/swagger-ui-express
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes