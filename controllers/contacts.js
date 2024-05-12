// made using code from or used code from:
//  the course video (https://www.youtube.com/watch?v=K00J87SofEc)
//  https://www.coderrocketfuel.com/article/store-mongodb-credentials-as-environment-variables-in-nodejs
//  https://stackoverflow.com/questions/58354629/moving-nodejs-mongodb-connection-code-to-another-file
//  https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
//  https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/
//  https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
//  https://www.mongodb.com/docs/manual/reference/method/cursor.toArray/
//  https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js?rq=1
//  https://stackoverflow.com/questions/34095126/express-router-id
//  https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/
//  https://www.bezkoder.com/node-express-mongodb-crud-rest-api/#Update_an_object

const { request } = require('express')

//  https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/
const contactsRoute = async (req, res) => {
    const mongo = require('mongodb')
    const client = new mongo.MongoClient(process.env.CONNECTION_STRING)
    await client.connect()

    const cur = client.db('cse-341').collection('contacts').find()
    const data = await cur.toArray()

    res.send(data)
    
    await client.close()
}

const contactRoute = async (req, res) => {
    const mongo = require('mongodb')
    const client = new mongo.MongoClient(process.env.CONNECTION_STRING)
    await client.connect()

    const data = await client.db('cse-341').collection('contacts').findOne({_id: new mongo.ObjectId(req.query.id)})

    res.status(200).send(data)
    
    await client.close()
}

const postContactRoute = async (req, res) => {
    const mongo = require('mongodb')
    const client = new mongo.MongoClient(process.env.CONNECTION_STRING)
    await client.connect()

    const insertion = await client.db('cse-341').collection('contacts').insertOne(req.body)
    
    res.status(201).send(insertion.insertedId)
    
    await client.close()
}

const putContactRoute = async (req, res) => {
    const mongo = require('mongodb')
    const client = new mongo.MongoClient(process.env.CONNECTION_STRING)
    await client.connect()

    const update = await client.db('cse-341')
    .collection('contacts')
    .updateOne({_id: new mongo.ObjectId(req.params.mod)}, {$set: req.body})
    
    res.status(204).send(`${update.matchedCount} doc(s) found`)
    
    await client.close()
}

const deleteContactRoute = async (req, res) => {
    const mongo = require('mongodb')
    const client = new mongo.MongoClient(process.env.CONNECTION_STRING)
    await client.connect()

    const deletion = await client.db('cse-341')
    .collection('contacts')
    .deleteOne({_id: new mongo.ObjectId(req.params.del)})
    
    res.status(200).send(`${deletion.deletedCount} doc(s) erased`)
    
    await client.close()
}

module.exports = {
    contactsRoute,
    contactRoute,
    postContactRoute,
    putContactRoute,
    deleteContactRoute
}