const express = require("express")
const nunjucks = require("nunjucks")
const dishes = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res){
    return res.render("home", { dishes })
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/dishes", function(req, res){
    return res.render("dishes", { dishes })
})

server.listen(5000, function() {
    console.log("server is running")
})