var express = require('express');
var router = express.Router();

console.log("[userRoutes] initialized");


router.route('/')
.get( ( req, res ) => {
userController.getAllUsers( req, res );
})
.post( ( req, res ) => {
userController.saveUser( req, res );
}
);

router.route('/:index')
.get( ( req, res ) => {
userController.getUser( req, res );
}
);


module.exports = router;    