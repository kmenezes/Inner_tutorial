var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var prof= require('./routes/professor');
var app = express();







app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use(morgan("dev"));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  //mongoose.connection.close();
});

app.use(express.static(__dirname + '/public'));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use('/', prof);
