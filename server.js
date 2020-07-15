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
    const foods = dishes;
    const foodIndex = req.params.index;
  
    return res.render("dishes", { dish:foods[foodIndex] });
  })

/* server.get("/dish", function(req, res){
    const id = req.query.id

    const dish = dishes.find(function(dish){
        if(dish.id == id){
            return true;
        }
    }) 

    if(!dish){
        return res.send("dish not found")
    }

    return res.render("dish", { dish })
}) */

server.listen(3000, function() {
    console.log("server is running")
})