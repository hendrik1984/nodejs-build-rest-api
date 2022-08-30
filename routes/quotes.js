const express = require('express');
const router = express.Router();

/* GET quotes listing */
router.get('/', function(res, res, next) {
    res.json({
        data: [
            {
                quote: 'First, solve the problem. Then, write the code.',
                author: 'John Wick'
            }
        ],
        meta: {
            page: 1
        }
    });
});

module.exports = router;