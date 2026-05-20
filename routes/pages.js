const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // let data = new Date();
    // let hours = data.getHours();
    // if (hours >= 12 && hours <= 18) {
    //     res.render('home');
    // } else {
    //     res.render('close');
    // }
    res.render('home');
});

router.get('/services', (req, res) => {
  res.render('services');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
