const express = require('express');
const path = require('path');
const db = require('./db.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/todo', (req, res) => {
  // TODO: add in database function to get array of all todos and res.send the results
  db.getTasks((err, results) => {
    if (err) {
      console.error('This is from get in server: ', err);
    } else {
      res.send(results);
    }
  });
});

app.post('/todo', (req, res) => {
  // TODO: add in database function to add single todo to the table
  const task = req.body.task;
  console.log('This is from the server post: ', task);
  db.addTask(task, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () =>
  console.log(`This todo app is listening at http://localhost:${port}`)
);
