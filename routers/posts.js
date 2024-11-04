const express = require('express')
const router = express.Router();
const posts = require('../db');

router.get('/', function(req, res) {
    res.send('Lista dei dolci');
    });