const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let data = new Date();
    let hours = data.getHours();
    if (hours > 9 && hours < 17) {
        res.render('home');
    } else {
        res.render('close');
    }
    
});

router.get('/services', (req, res) => {
 
    res.render('services');
  }
);

router.get('/contact', (req, res) => {
 
    res.render('contact');
  }
  
);
router.get('/menu', (req, res) => {
  res.render('menu');
});

module.exports = router;
