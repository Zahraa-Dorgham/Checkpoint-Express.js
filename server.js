const express = require('express');
const path = require('path');
const pagesRouter = require('./routes/pages');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');




app.use('/', pagesRouter);
app.use('/product', require('./routes/product'));



app.listen(5000, (err) => err ? console.error(err) : console.log(`Server is running on http://localhost:5000`));