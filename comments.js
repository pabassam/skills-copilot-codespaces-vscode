// Create web server and listen for requests
// 1. Create a web server
// 2. Listen for requests
// 3. Send response

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');

// read data from JSON file
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// convert JSON to JS object
const dataObj = JSON.
