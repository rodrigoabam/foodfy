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

routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipess", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)
routes.post("/admin/recipes", recipes.create)
routes.put("/admin/recipes", recipes.show)
routes.delete("/admin/recipes", recipes.edit)

module.exports = routes;
