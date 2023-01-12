var express = require("express") 
var app = express()
var port = process.env.port || 3000
//var path = require("path")

//setup a route for static files
app.use(express.static(__dirname+"/static"))

//main route fo the sites
app.get('/', function(req,res){
    //res.send("Welcome to the dog pound")
    res.sendFile(__dirname+"/static/index.html")
})

app.get("/home", function(req,res){
    res.send("Homebase that means it safe")
})



app.listen(port, function(){
    console.log("Running on localhost 3000 with wovles")
})