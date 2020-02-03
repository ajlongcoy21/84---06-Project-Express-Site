const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes/main');

app.use(mainRoutes);

app.use((req, res, next) => {

    const err = new Error('Not Found');
    err.status = 404;
    next(err);

});

app.listen(3000 , () => {

    console.log('The express site application is running on localhost:3000!');

});
