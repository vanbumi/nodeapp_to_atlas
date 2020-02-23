const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.json('Halaman Index')
})

// Database Connection
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dyo:dyo123456@bumimakh1-awitx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
console.log('Connected to Atlas');
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// setup ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');





// Server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});

