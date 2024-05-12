// made using code from the course video (https://www.youtube.com/watch?v=K00J87SofEc)

const contactsConroller = require('../controllers/contacts')

function addContactsRoutes(routes) {
    routes.get('/contacts', contactsConroller.contactsRoute)
    routes.get('/contact', contactsConroller.contactRoute)

    // made using code from https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/
    routes.post('/post-contact', contactsConroller.postContactRoute)

    // made using code from https://stackoverflow.com/questions/34095126/express-router-id
    routes.put('/contacts/:mod', contactsConroller.putContactRoute)
    routes.delete('/delete-contact/:del', contactsConroller.deleteContactRoute)
}

module.exports = addContactsRoutes