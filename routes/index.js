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

router.get('/mentorschap-wat-is-het', function(req,res){
    res.render('pages/mentorschap', {
        message: handleMessage(req),
        title: "Wat is een mentorschap?",
        description: "Op welke wijze zou een mentorschap mij kunnen helpen?",
        keywords: "mentorschap",
        author: "Ben Stuijts",
        breadcrumbs: [{url: "/", name: "home"}, {url: "/mentorschap-wat-is-het", name: "Op welke wijze zou een mentorschap mij kunnen helpen?"}],
    });
});

router.get('/konnekt-buurtnetwerk', function(req,res){
    res.render('pages/konnekt-buurtnetwerk', {
        message: handleMessage(req),
        title: "Konnekt Buurtnetwerk",
        description: "Het opzetten en leiden van een stichting, die zich inzet om het sociale netwerk in een wijk of buurt te versterken.",
        keywords: "konnekt, konnekt buurtnetwerk",
        author: "Ben Stuijts",
        breadcrumbs: [{url: "/", name: "home"}, {url: "/konnekt-buurtnetwerk", name: "Konnekt Buurtnetwerk"}],
    });
});

router.get('/dominique-aarts', function(req,res){
    res.render('pages/dominique-aarts', {
        message: handleMessage(req),
        title: "Ik wil in het Nederlands Elftal spelen",
        description: "Hoe maak je als jonge sporter jouw droom werkelijkheid.",
        keywords: "dominique aarts, hockey, nederlands elftal",
        author: "Ben Stuijts",
        breadcrumbs: [{url: "/", name: "home"}, {url: "/dominique-aarts", name: "Ik wil in het Nederlands Elftal spelen"}],
    });
});

router.get('/suzan-de-jong', function(req,res){
    res.render('pages/suzan-de-jong', {
        message: handleMessage(req),
        title: "Suzan de Jong",
        description: "Hoe ontwikkel ik mij razendsnel in een nieuwe omgeving en binnen een nieuw vakgebied?",
        keywords: "suzan de jong, stage, opleiding",
        author: "Ben Stuijts",
        breadcrumbs: [{url: "/", name: "home"}, {url: "/suzan-de-jong", name: "Combinatie opleiding, stage en mentorschap"}],
    });
});

router.get('/carin-den-heijer', function(req,res){
    res.render('pages/carin-den-heijer', {
        message: handleMessage(req),
        title: "Carin den Heijer",
        description: "Uitgedaagd worden om jouw dromen waar te maken.",
        keywords: "Carin den Heijer",
        author: "Ben Stuijts",
        breadcrumbs: [{url: "/", name: "home"}, {url: "/carin-den-heijer", name: "Maak je dromen gewoon waar"}],
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