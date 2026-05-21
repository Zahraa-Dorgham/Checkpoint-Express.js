const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let data = new Date();
    let hours = data.getHours();
    if (hours >= 9 && hours <= 17) {
        res.render('home');
    } else {
        res.render('close');
    }
    
});

router.get('/services', (req, res) => {
  let data = new Date();
  let hours = data.getHours();
  if (hours >= 9 && hours <= 17) {
    res.render('services');
  } else {
    res.render('close');
  }
});

router.get('/contact', (req, res) => {
  let data = new Date();
  let hours = data.getHours();
  if (hours >= 9 && hours <= 17) {
    res.render('contact');
  } else {
    res.render('close');
  }
});
router.get('/menu', (req, res) => {
  res.render('menu');
});

module.exports = router;
