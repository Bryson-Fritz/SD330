console.log("[userController] initialized");

var user = require('../model/user')

let users = [];

let brian = user.createUser("Brian", "Gormanly");
let bryson = user.createUser("Bryson", "Fritz");
let henry = user.createUser("Henry", "Johnson");
let peter = user.createUser("Peter", "Smith");

users.push(brian);
users.push(bryson);
users.push(henry);
users.push(peter);

exports.getAllUsers = ( req, res) => {
    res.setHeader('Content-Type' ,'application/json');
    res.send(users);
}

exports.getUser = ( req, res) => {
    res.setHeader('Content-Type' ,'application/json');
    res.send(users[req.params.index]);
}

exports.saveUser = ( req, res ) => {
    let newUser = User.createUser(req.body.firstName, req.body.lastName, req.body.email );
    users.push(newUser);
    res.setHeader( 'Content-Type', 'application/json' );
    res.send(users);
}