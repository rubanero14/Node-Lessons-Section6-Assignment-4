const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home',
        path: '/',
    });
});

router.post('/', (req, res, next) => {
    res.redirect('/users');
});

module.exports = router;