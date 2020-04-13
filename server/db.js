var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todos'
});

connection.connect(err => {
  if (err) {
    console.log('This is from the db connection: ', err);
  }
  console.log('Your database is now connected!');
});

const getTasks = callback => {
  connection.query('SELECT * FROM tasks', (err, results) => {
    console.log('This is from db getTask: ', results);
    if (err) throw err;
    else callback(null, results);
  });
};

const addTask = (task, callback) => {
  connection.query(
    `INSERT INTO tasks (task) VALUES ("${task}")`,
    (err, results) => {
      if (err) throw err;
      else callback(null, results);
    }
  );
};
module.exports = { getTasks, addTask };
