// used/copied from https://codeforgeek.com/express-nodejs-tutorial/ and modified w/ course video

const express = require('express');
const app = express();
const lesson1Controller = require("./controllers/lesson1")
 
app.get('/', lesson1Controller.alexRoute)
app.get('/jada', lesson1Controller.jadaRoute)
app.get('/jonas', lesson1Controller.jonasRoute)

const port = 3000
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});