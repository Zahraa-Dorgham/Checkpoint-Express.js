const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    let data = new Date();
    let hours = data.getHours();
    if (hours >= 14 && hours <= 18) {
        res.render('home');
    } else {
        res.render('close');
    }
});

router.get('/services', (req, res) => {
  res.send('services');
});

router.get('/contact', (req, res) => {
  res.send('contact' );
});

module.exports = router;
