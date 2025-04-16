const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Save uploaded files to 'public/uploads'
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename the file with a timestamp
  }
});
const upload = multer({ storage: storage });

// Route to render the upload form
app.get('/', (req, res) => {
  res.render('index');
});

// Route to handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  const imagePath = '/uploads/' + req.file.filename;
  res.render('display', { imagePath: imagePath });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
