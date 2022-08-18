const express = require('express');

const router = express.Router();

const names = [];

router.get('/users', (req, res, next) => {
    res.render('users',{
        pageTitle: 'Users',
        path: '/users',
        hasUsers: names.length > 0,
        names: names,
    });
});

router.post('/users', (req, res, next) => {
    names.push(req.body.name);
    console.log(names);
    res.render('users',{
        names: names,
        pageTitle: 'Users',
        path: '/users',
        hasUsers: names.length > 0,
    });
});

module.exports = router;