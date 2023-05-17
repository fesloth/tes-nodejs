const express = require('express');
const app = express();
const port = 3000;

// Handler untuk route root
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Jalankan server pada port yang ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
