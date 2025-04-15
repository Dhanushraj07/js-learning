const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});
module.exports = router;



// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   const products = req.products;

//   const productList = products.map(p => `<li>${p}</li>`).join('');

//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//         <title>Shop</title>
//     </head>
//     <body>
//         <header>
//             <nav>
//                 <ul>
//                     <li><a href="/">Shop</a></li>
//                     <li><a href="/add-product">Add-Product</a></li>
//                 </ul>
//             </nav>
//         </header>
//         <main>
//             <h1>Shop Products</h1>
//             <ul>
//               ${productList || '<li>No products added yet</li>'}
//             </ul>
//         </main>
//     </body>
//     </html>
//   `);
// });

// module.exports = router;
