const mongo = require('mongodb')

async function main() {
    const uri = 'mongodb+srv://mbower00:ge0Drag0n@cluster0.q0c2szy.mongodb.net/'

    const client = new mongo.MongoClient(uri)

    await client.connect()
    try {
        await client.connect()
        await listDatabases(client)  
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
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