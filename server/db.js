var mysql  = require('mysql'); 

// DB connection information
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'todos'
});
 
connection.connect( err => {
  if ( err ) {
    console.log( 'This is in the db; ', err )
  } else {
    console.log( "Connected to the Database!!!" )
  }
});

// This is a query that adds an item into the tasks table in the todos db
const addTask = ( task, callback ) => {
  connection.query( `INSERT INTO tasks (task) VALUES ("${ task }")`, ( err, results ) => {
    if ( err ) {
      console.log( 'This is from the addTask query in DB; ', err )
    } else {
      callback( null, results )
    }
  }) 
}

// This is a query that deletes an item from the task table in the todos db
const deleteTask = ( id, callback ) => {
  console.log( "This is from the deleteTask query in the db; ", id );
  connection.query( `DELETE FROM tasks WHERE id="${ id }"`, ( err, data ) => {
    if ( err ) {
      console.log( "This is from the deleteTask query in the db; ", err )
    } else {
      callback(null, data);
    } 
  });
};
 
// this is a query for all items from the task table in the todos db
const getTasks = ( callback ) => {
  connection.query( 'SELECT * from tasks;', ( error, results ) => {
    if ( error ) {
      console.log( "This is from the getTask query in DB; ", error );
    } else {
      callback( null, results );
    }
})
}

module.exports = { getTasks, addTask, deleteTask }

