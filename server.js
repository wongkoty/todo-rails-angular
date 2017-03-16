const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;

app.use(express.static('public'))

app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`on port ${port}`)
})
