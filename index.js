const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: "Halo dari API DevOps!" });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
