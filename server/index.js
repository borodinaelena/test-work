let express  = require('express');
let router   = express.Router();

router.get('/', function(req, res){
    return res.json({success: true, message: "Test"});
});

module.exports = router;
