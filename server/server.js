const express = require('express');
const app = express();

app.use('/first',(req, res) => {
  res.send({some:'Json'})
  
});



app.listen(3000, () => console.log('Server running on port 3000'));
