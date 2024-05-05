// made using code from or used code from:
//  the course video (https://www.youtube.com/watch?v=K00J87SofEc)
//  https://www.coderrocketfuel.com/article/store-mongodb-credentials-as-environment-variables-in-nodejs
//  https://stackoverflow.com/questions/58354629/moving-nodejs-mongodb-connection-code-to-another-file
//  https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
//  https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/
//  https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
//  https://www.mongodb.com/docs/manual/reference/method/cursor.toArray/
//  https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js?rq=1

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

    if (data) {
        res.send(data)
    } else {
        res.send('NO CONTACT FOUND')
    }
    
    await client.close()
}

module.exports = {
    contactsRoute,
    contactRoute
}