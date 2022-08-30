var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  console.log('\n')
  res.json({data: 'alive'});
});

module.exports = router;
