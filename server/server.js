const express = require( 'express' )
const path = require( 'path' )
const db = require( "./db.js") ;
//const parser = require('body-parser');

const app = express()

// app.use(parser.json())
app.use( express.static(path.join(__dirname, "../dist" )));



app.get( '/todo', ( req, res ) => {
  // this is a query with a database function that gets an array of all the todos and res.sends the results
  db.getTasks(( err, results ) => {
    if ( err ) {
      console.log( err )
    } else {
      res.send( results );
    }
  })
});

app.post("/todo", ( req, res ) => {
  // this is a query with a database function that adds a single todo into the tasks table todo db
  const task = req.body.task;
  console.log( task );
  db.addTask( task, ( err, data ) => {
    if ( err ) {
      console.error( err );
    } else {
      res.send( data );
    }
  });
});

app.delete( "/todo/:id", ( req, res ) => {
  // this is a database function that removes a single todo item from the task table
  const id = req.params.id; // what is this ????
  console.log( "id from server", id );
  db.deleteTask( id, ( err, data ) => {
    if ( err ) {
      console.error( err );
    } else {
      res.send( data );
    }
  });
});

// localhost and port information
const port = 5000
app.listen( port, () => console.log( `Example app listening on port ${ port }!` ))
