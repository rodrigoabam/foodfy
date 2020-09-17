const express = require('express')
const dishes = require('./controllers/dishes')
const recipes = require('./controllers/recipes')

const routes = express.Router()


routes.get("/", function(req, res){
  return res.redirect("/home")
})
routes.get("/home", dishes.home)
routes.get("/about", dishes.about)
routes.get("/dishes/:id", dishes.show)

routes.get("/admin", recipes.home)


module.exports = routes;
