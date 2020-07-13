const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("home")
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/dishes", function(req, res){
    return res.render("dishes")
})

server.listen(5000, function() {
    console.log("server is running")
})