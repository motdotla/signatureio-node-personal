var SIGNATURE_SECRET_API_KEY = process.env.SIGNATURE_SECRET_API_KEY;
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app           = express();
var signatureio   = require('signatureio')(SIGNATURE_SECRET_API_KEY);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  signatureio.documents.all({}, function(json) {
    documents = [];

    if (!!json.success) {
      documents = json.documents
    }

    console.log(documents);

    res.render('index', { title: 'Signatureio Personal', documents: documents });
  });
});

app.post('/documents', function(req, res) {
  signatureio.documents.create(req.body, function() {
    res.redirect('/');
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
