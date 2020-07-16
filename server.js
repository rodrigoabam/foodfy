const express = require("express")
const nunjucks = require("nunjucks")
const dishes = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("home", { dishes })
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/dishes/:index", function (req, res) {
    const dishIndex = req.params.index;
  
    return res.render("dishes", { dish:dishes[dishIndex] } );
})


server.use(function(req, res){
    const error = {
        img: "https://cdn.dribbble.com/users/4902434/screenshots/11490599/media/d85bf595bedc3604c14ad609dd0ab0c0.jpg",
        name: "Error 404",
        note: "Receita não encontrada!"
    }

    res.status(404).render("not-found", { error } )
})

server.listen(3000, function() {
    console.log("server is running")
})