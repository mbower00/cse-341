// made using code from the course video (https://www.youtube.com/watch?v=K00J87SofEc)

const contactsConroller = require('../controllers/contacts')

function addContactsRoutes(routes) {
    routes.get('/contacts', contactsConroller.contactsRoute)
    routes.get('/contact', contactsConroller.contactRoute)
}

module.exports = addContactsRoutes