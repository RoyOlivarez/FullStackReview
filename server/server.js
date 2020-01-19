const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const db = require("./db.js");
const parser = require('body-parser');

app.use(parser.json())
app.use(express.static(path.join(__dirname, "../dist")));


// Test request
app.get('/test', function (req, res) {
  db.getTasks((err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results);
    }
  })
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
