let express      = require('express');
let app          = express();
let path         = require('path');
let logger       = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');

// Global varibles
global._       = require('lodash');
global.appDir  = __dirname;
global.Promise = require('bluebird');

// view engine setup
app.set('devel', false);
app.set('view cache', false);
app.set('scripts cache', false);
app.set('views', false);

// start loger
app.use(logger('dev'));

app.use(bodyParser.json({
    limit: '100mb'
}));

app.use(bodyParser.urlencoded({
    extended: false,
    limit: '100mb'
}));

app.use(cookieParser());
app.use(express.static(path.join(appDir, 'public')));

// Routes
app.use('/api/', require('./server/index'));

app.get('*', function (req, res) {
    res.sendFile(appDir + '/public/index.html');
});

// Since this is the last non-error-handling
// middleware use()d, we assume 404, as nothing else
// responded.
app.use(function (req, res, next) {
    res.status(404);

    // respond with json
    if (req.accepts('json')) {
        return res.json({error: 'Not found'});
    }

    // default to plain-text. send()
    return res.type('txt').send('Not found');
});

module.exports = app;
