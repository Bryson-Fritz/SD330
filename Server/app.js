const express = require('express');
const app = express();

app.use(express.static('Client/Public'))

app.get('/', function (req, res){
    res.sendFile('index.html', {root: 'C:/Users/bryso/OneDrive/Desktop/Project/Client/Views'})
})

app.get('/feed', function (req, res){
    res.sendFile('feed.html', {root: 'C:/Users/bryso/OneDrive/Desktop/Project/Client/Views'})
})

app.get('/css/style.css', function (req, res){
    res.sendFile('style.css', {root: 'C:/Users/bryso/OneDrive/Desktop/Project/Client/Public/css'})
})

app.get('/css/feed.css', function (req, res){
    res.sendFile('feed.css', {root: 'C:/Users/bryso/OneDrive/Desktop/Project/Client/Public/css'})
})

let userRoutes = require('./route/userRoutes');
app.use('/api/user', userRoutes);

//Controller route?
let userController = require('./controller/userController');
//app.use('/api/user', userController);

app.listen(1337, () => console.log('Marist Chatter Listening on port 1337!'));