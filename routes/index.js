var express = require('express');
var router = express.Router();
const rapid = require('rapid-io');

const client = rapid.createClient('NDA1OWE0MWo1b3AzYnVnLnJhcGlkLmlv');

const Cars = client.collection('Honda');
console.log(Cars);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
