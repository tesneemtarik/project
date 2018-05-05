var express = require('express'),
    router = express.Router();

//routes for contact api
router.use("/contact", require("../controllers/contact.api"));

//add here other api routes

module.exports = router;
1