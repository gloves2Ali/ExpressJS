var express = require('express');
var router = express.Router();

/* Post home page. */
router.get('/delete',function(req, res, next) {
    res.render('delete',{ marks:'Hello the new routes' });
    //alert(11);
});

module.exports = router;
