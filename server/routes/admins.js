const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/add-product',(req, res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  });
router.post('/add-product', (req, res, next) => { 
    console.log('Form-data:',req.body);
    res.send('<h1>Form submitted successfully!</h1>');
 
  });
  module.exports = router;


//   const express = require('express');
// const router = express.Router();
// const path = require('path');

// router.get('/add-product', (req, res) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
// });

// router.post('/add-product', (req, res) => {
//   const productTitle = req.body.title;
//   req.products.push(productTitle); // Store it
//   res.redirect('/'); // Go back to shop
// });

// module.exports = router;
