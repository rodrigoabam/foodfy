const dishes = require('../data')
const data = require('../data.json')
const fs = require('fs')

exports.index = function(req, res){
  return res.render("admin/recipes", { dishes })
}
exports.create = function(req, res){
  return res.render("admin/create", { dishes })
}

exports.show = function(req, res){
  const { id } = req.params 

  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  })

  if(!foundRecipe) return res.send("Receita não encontrada.")

  const recipe = {
    ...foundRecipe,
    ingredients: "",
    preparations: "",
  }

  return res.render("admin/show", {recipe: foundRecipe} )
}

exports.edit = function(req, res){
  return res.render("admin/recipes/:id/edit", { dishes })
}
exports.post = function(req, res){
  const keys = Object.keys(req.body)

  for(key of keys){
    if(req.body[key] == "") return res.send("Todos os campos são obrigatórios.")
  }

  let {name, photo_recipe, ingredients, preparations, add_info} = req.body

  const id = Number(data.recipes.length + 1)

  data.recipes.push({
    id,
    name,
    photo_recipe,
    ingredients,
    preparations,
    add_info,
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write file erro!")

    return res.redirect("/admin/recipes")
  })
}
exports.put = function(req, res){
  return res.send("2")
}
exports.delete = function(req, res){
  return res.send("3")
}