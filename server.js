const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`on port ${port}`)
})
