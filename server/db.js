var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'todos'
});
 
connection.connect();
 
// this is a get request that adds all tasks from todos db to a front side list
const getTasks = (callback) => {
  connection.query('SELECT * from tasks;', (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
})
}

module.exports = { getTasks }

