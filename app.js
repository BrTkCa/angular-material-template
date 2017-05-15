let express = require('express')
    , path = require('path')
    , load = require('express-load')
    , favicon = require('serve-favicon')
    , logger = require('morgan')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

load('routes');

app.enable('trust proxy');

app.listen(process.env.PORT || 3000, function(){
  console.log("Angular Material Template está ouvindo na porta 3000");
});

module.exports = app;
