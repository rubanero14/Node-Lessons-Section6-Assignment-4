const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();

// Route files import section 
const homeRoute = require('./routes/home');
const userRoute = require('./routes/users');

// Setting template engine section
app.set('view engine', 'ejs');
app.set('views', 'views');

// Initiate body-parser middleware
app.use(bodyParser.urlencoded({extended:true}));

// // Setting serve static files section => for serving browser the CSS files
// app.use(express.static(path.join(__dirname),'public/css'));

// Routes middleware section
app.use(userRoute);
app.use(homeRoute);
app.use((req,res,next) => {
    res.status(404).render('404', {
        pageTitle: 'Page not found!',
        path: undefined,
    });
});

// Server initiation section
app.listen(PORT, () => {
    console.log(`Server online at http://localhost:${PORT}`);
});
