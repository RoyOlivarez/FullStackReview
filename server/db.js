var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'todos'
});
 
connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

const sendReq = (callback) => {
  connection.query('SELECT * from tasks;', (error, results) => {
    console.log(results)
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
})
}

module.exports = { sendReq }

