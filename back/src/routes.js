const express = require('express');
const multer = require ('multer');
const multerConfig = require('./config/multer');

const router = express.Router();

// const exController = require('./controllers/exController')

// router.post('/rota', exController.metodo);

router.get('/teste', (req, res) => {
    return res.send('Ta funcionando. =D');
})

module.exports = router;