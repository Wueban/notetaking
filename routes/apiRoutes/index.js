const router = require('express').Router();
//get noteroute
const noteRoutes =  require('./noteRoute');

router.use(noteRoutes)

module.exports = router;