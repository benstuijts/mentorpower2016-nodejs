'use strict';
const express   = require("express");
const app       = express();
const session = require('express-session');
const flash = require('connect-flash');
const url         = require('url');
let mode;
try {
    mode = process.argv[2].split(":")[1] || 'production';
} catch(error) {
    mode = 'development';
}

const config = require('./config/config')[mode];
const port = process.env.port || 3000;
const voorbeelden = require('./data/voorbeelden');
const navigation = require('./config/navigation')

/* Configuration App */
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

/* Middleware */
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true
}));
app.use(flash());

app.use('/', function(req, res, next){
    var u = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
    });
    
    app.locals = config;
    app.locals['voorbeelden'] = voorbeelden;
    app.locals['url'] = u;
    res.locals['urlFor'] = function(url) { return '/' + url; };
    res.locals['navigation'] = navigation;
    res.locals['baseUrl'] = "http://mentorpower.nl/";
    next();
});

/* Routing */
app.use('/', require('./routes'));

app.listen(port, function(error){
    if(error) throw error;
    console.log(`App listening on port ${port} mode:${mode}.`);
});