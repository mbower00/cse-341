// made using code from 
//  the course video (https://www.youtube.com/watch?v=K00J87SofEc)
//  https://www.coderrocketfuel.com/article/store-mongodb-credentials-as-environment-variables-in-nodejs
//  https://stackoverflow.com/questions/58354629/moving-nodejs-mongodb-connection-code-to-another-file
//  https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database


const { MongoClient } = require('mongodb');
const mongo = require('mongodb')
const client = new MongoClient(process.env.CONNECTION_STRING)

const contactsRoute = async (req, res) => {
    await client.connect()
    const cseDb = db.db('cse-341')
    const contactsCollection = cseDb.collection('contacts')
    res.send(await listDatabases(client))
}

const contactRoute = async (req, res) => {
    await client.connect()
    const cseDb = db.db('cse-341')
    const contactsCollection = cseDb.collection('contacts')
    res.send(contactsCollection)
}

module.exports = {
    contactsRoute,
    contactRoute
}