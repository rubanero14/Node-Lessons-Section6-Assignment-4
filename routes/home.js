const express = require('express');

const router = express.Router();

const names = [];

router.get('/', (req, res, next) => {
    res.send(`
        <form method="POST" action="/users">
            <input name="name" id="name" type="text" placeholder="Enter name.."/>
            <button type="submit">Save</button>
        </form>
    `);
});

router.post('/', (req, res, next) => {
    names.push({
        name: req.body.name,
    });
    console.log(req.body);
    res.redirect('/users');
});

module.exports = router;