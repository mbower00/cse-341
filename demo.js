const mongo = require('mongodb')

async function main() {
    const uri = 'mongodb+srv://mbower00:ge0Drag0n@cluster0.q0c2szy.mongodb.net/'

    const client = new mongo.MongoClient(uri)

    await client.connect()
    try {
        await client.connect()
        // await listDatabases(client)
        await findOneContactById(client, new mongo.ObjectId('663447d4ad1fb75de083cb9a'))
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }
}

async function findOneContactById(client, idOfContact) {
    // for the single call...
    // const res = await client.db('cse-341').collection('contacts').findOne({_id: idOfContact})
    const resAllCurs = await client.db('cse-341').collection('contacts').find()
    const res = await resAllCurs.toArray()
    if (res) {
        console.log(res)
    } else {
        console.log('NOT FOUND')
    }
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases()
    console.log('Databases')
    databasesList.databases.forEach(db => {
        console.log(db.name)
    });
    console.log("\n\n\n\n\n\n\n")
    console.log(databasesList)
}

main()