
var express = require('express');
var bodyparser = require('body-parser');
var mongoose =  require('mongoose');
var WebSocketServer = require('uws').Server;
// var mailer =  require('./server/mailer/mailer');
//var mongoConnection =  require('./server/utils/db');

var app = express();
//To parse result in json format  
app.use(bodyparser.json());  

// mongoose.connect(mongoConnection,{user:'demo',pass:'demo1234*'})
// .then(()=>{
//     console.log('connected');
// })
// .catch((err)=>{
//     console.log('Error connecting to db : '+err);
// })

    //Here we will enable CORS, so that we can access api on cross domain.  
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('view engine', 'ejs');
    app.use(function (req, res, next) {  
        res.header("Access-Control-Allow-Origin", "*");  
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");  
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");  
        next();  
    });  
    //Lets set up our local server now.  
    var server = app.listen(process.env.PORT || 4000, function () {  
        var port = server.address().port;  
        console.log("App now running on port", port);  
    });  
    

    app.wss = new WebSocketServer({
        server : server
    });
    let clients =[];
    app.wss.on('connection',(ws)=>{
      
        const userId =  clients.length+1;
        console.log('New client connected userId : ',userId);
        ws.userId =userId;

        let newClient = {
            ws:ws,
            userId:userId
        }
        clients.push(newClient);
        //listens for message from client
        ws.on('message',message=>{
            console.log('Received : '+message);
            ws.send('Hello userId : '+userId+' from server..');//send message to client
        });  
        
        ws.on('close',()=>{
            console.log('userId : '+userId+' disconnected.');
            clients = clients.filter((client) => client.userId !== userId);
        })
    });

    // var usersRouter = require('./server/routes/users');
    // var postsRouter = require('./server/routes/posts');
    app.get('/',function(req,res){
        res.send('Welcome to React Chat API');
    });
    app.get('/api/all_connections',function(req,res){
        res.send({
            connections:clients
        });
    });
    // app.use('/api/users',usersRouter);
    // app.use('/api/posts',postsRouter);
    app.post('/sendmail',function(req,res){
        var locals = {
            email:req.body.email,
            name : req.body.name,
            tokenUrl : req.body.token,
            subject:'Welcome to React'
        }
        mailer.sendMail('EmailConfirmation.ejs',locals);  
    });
    //error handler
    app.use(function(err, req, res, next) {
        console.log('Error Message : '+err.message);
        res.status(err.status || 500);
        res.send({
            success: "false",
            msg: err.message,  
            data:[]          
        });
      });

//this is comment in master

//this is comment in test-branch

