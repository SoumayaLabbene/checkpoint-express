const express = require('express');
const app = express();
const time = require("./time");

const port = 4000;
app.use(express.static('public'));

app.use(time)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html')
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/views/services.html')
});

app.listen(port, function(){
  console.log('Running on http://localhost:%s', 
      port);
});