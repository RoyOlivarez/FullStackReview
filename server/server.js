const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const db = require("./db.js");

app.use(express.static(path.join(__dirname, "../dist")));


app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
