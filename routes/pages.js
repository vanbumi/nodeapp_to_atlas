const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.json('Halaman Index')
    res.render("index", {
        title: 'Home' 
    });
})

module.exports = router;