const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const products = []; // Store products in memory

app.use(bodyParser.urlencoded({ extended: false }));

// Pass `products` to each request
app.use((req, res, next) => {
  req.products = products;
  next();
});

const adminRoutes = require('./routes/admins');
const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => console.log('Server running on port 3000'));




// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const products = []; // Store products in memory

// app.use(bodyParser.urlencoded({ extended: false }));

// // Pass `products` to each request
// app.use((req, res, next) => {
//   req.products = products;
//   next();
// });

// const adminRoutes = require('./routes/admins');
// const shopRoutes = require('./routes/shop');

// app.use(adminRoutes);
// app.use(shopRoutes);

// // 404 Handler
// app.use((req, res, next) => {
//   res.status(404).send('<h1>Page not found</h1>');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
