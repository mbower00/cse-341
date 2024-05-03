// made using code from the course video (https://www.youtube.com/watch?v=K00J87SofEc)

const routes = require('express').Router()
const contactsConroller = require('../controllers/contacts')

routes.get('/contacts', contactsConroller.contactsRoute)
routes.get('/contact', contactsConroller.contactRoute)

module.exports = routes