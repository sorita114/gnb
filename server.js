var express = require( 'express' ),
    http = require( 'http' ),
    fs = require( 'fs' ),
    path = require( 'path' ),
    app = express(),
    server = http.createServer( app );

app.use( '/static/' , express.static( __dirname  ));

app.get( '/' , function ( req, res ) {
  fs.readFile( 'src/gnb.html' , function( error , data ){
    if( error ){
      console.log( error );
    } else {
      res.writeHead( 200 , { 'Content-Type' : 'text/html' });
      res.end( data );
    }
  });
});


server.listen( 8000 , function(){
  console.log( __dirname );
  console.log( 'Server running at http://localhost:8000' );
});
