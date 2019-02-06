var express  = require('express')
var todoController = require('./controllers/todoController');


var app = express();
// set the template engine to ejs

app.set('view engine', 'ejs');

// static files

app.use(express.static('./public'));

todoController(app);

// listening to port

app.listen(3000);

console.log('You are listening to port 3000');

