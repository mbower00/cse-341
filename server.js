// copied from https://codeforgeek.com/express-nodejs-tutorial/ and modified using code from the course video (https://www.youtube.com/watch?v=K00J87SofEc)

const express = require('express');
const app = express();
const port = 3000
 
app.use('/', require('./routes'))

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});