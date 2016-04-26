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
        navigation: require('../config/navigation'),
        message: handleMessage(req),
        title: "Kan ik jou helpen?",
        description: "De kracht van een mentorschap zit in de combinatie van het stellen van vragen en het geven van antwoorden.",
        keywords: "mentor, mentorschap, mentorpower",
        author: "Ben Stuijts"
    });
});

module.exports = router;