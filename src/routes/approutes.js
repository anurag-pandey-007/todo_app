const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello form node js");
});

module.exports = router;