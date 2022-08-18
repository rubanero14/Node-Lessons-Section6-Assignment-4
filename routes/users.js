const express = require('express');

const router = express.Router();

const names = require('./home');

router.get('/users', (req, res, next) => {
    res.send(`
        <h1>List of Users</h1>
        <ul>
            <li>Hi</li>
        </ul>
    `);
});

router.post('/users', (req, res, next) => {
    res.send(`
        <h1>List of Users</h1>
        <ul>
            <li>${req.body.name}</li>
        </ul>
    `);
});

module.exports = router;