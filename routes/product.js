
const express = require('express');
const productRouter = express.Router(); 

productRouter.get('/pro', (req, res) => res.send ('all data of products'));




module.exports = productRouter;





