const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const config = require('./config');


// Get our API routes
const api = require('./server/routes/api');
const db = require('./server/routes/db');
const group = require('./server/routes/groups');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

const routes = express.Router();

routes.get('/test', function(req, res) {
    res.send('Our Sample API is up...');
});


// Set our api routes
app.use('/api', api);
app.use('/db', db);
app.use('/group', group);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3002';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));