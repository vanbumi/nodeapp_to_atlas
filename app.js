const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('Halaman Index')
})


// Database Connection
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://dyo:dyo123456@bumimakh1-awitx.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected... atlas');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});



// Server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});

