'use strict';
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const session = require('express-session');

/* Middleware */
router.use(bodyParser.json()); // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
function handleMessage(req) {
    return {
        "success"   : req.flash("success"),
        "info"      : req.flash("info") || req.flash("message"),
        "warning"   : req.flash("warning"),
        "error"     : req.flash("error"),
        "message"   : req.flash("message")
    };
}

router.get('/', function(req, res) {
    res.render('landingspage', {
        message: handleMessage(req),
        title: "Kan ik jou helpen?",
        description: "De kracht van een mentorschap zit in de combinatie van het stellen van vragen en het geven van antwoorden.",
        keywords: "mentor, mentorschap, mentorpower",
        author: "Ben Stuijts",
        breadcrumbs: [],
    });
});

router.get('/benstuijts', function(req,res){
    res.render('pages/benstuijts', {
        message: handleMessage(req),
        title: "Wie is Ben Stuijts?",
        description: "Ontmoet Ben Stujts: vader, mentor, ondernemer, sportcoach en manager.",
        keywords: "ben stuijts",
        author: "Ben Stuijts",
        breadcrumbs: [{url: "/", name: "home"}, {url: "/benstuijts", name: "Ontmoet Ben Stuijts"}],
    });
});

router.get('*', function(req, res){
    res.render('pages/404', {
        title: "Pagina niet gevonden",
        description: "404 pagina",
        keywords: "404",
        author: "Ben Stuijts"
    });
});
module.exports = router;