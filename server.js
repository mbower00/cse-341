// copied from https://codeforgeek.com/express-nodejs-tutorial/ and modified using code from the course video (https://www.youtube.com/watch?v=K00J87SofEc)

const express = require('express');

// made using code from https://www.coderrocketfuel.com/article/store-mongodb-credentials-as-environment-variables-in-nodejs
const dotenv = require('dotenv');
dotenv.config()

const app = express();
const port = 3000

// used code from https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/
const bp = require('body-parser')
app.use(bp.json())

app.use('/', require('./routes'))

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});