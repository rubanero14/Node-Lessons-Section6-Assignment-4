const express = require('express');

const router = express.Router();

const names = [];

router.get('/users', (req, res, next) => {
    res.render('users',{
        pageTitle: 'Users',
        path: '/users',
        names: names,
        hasNames: names.length > 0,
    });
});

router.post('/users', (req, res, next) => {
    names.push({
        name: req.body.name,
    });
    console.log(names);
    res.redirect('/users');
});

module.exports = router;