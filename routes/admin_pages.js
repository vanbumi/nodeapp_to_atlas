const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Halaman Admin')
})

module.exports = router;
