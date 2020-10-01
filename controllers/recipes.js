const dishes = require('../data')
const data = require('../data.json')
const fs = require('fs')

exports.index = function(req, res){
  return res.render("admin/recipes", { recipes: data.recipes })
}
exports.create = function(req, res){
  return res.render("admin/create")
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
  const { id } = req.params 

  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  })

  if(!foundRecipe) return res.send("Receita não encontrada.")


  return res.render("admin/edit", { recipe: foundRecipe })
}
exports.post = function(req, res){
  const keys = Object.keys(req.body)

  for(key of keys){
    if(req.body[key] == "") return res.send("Todos os campos são obrigatórios.")
  }

  let {name, author_recipe, photo_recipe, ingredients, preparations, add_info} = req.body

  let id = 1
  const lastRecipe = data.recipes[data.recipes.length - 1]

  if(lastRecipe){
    id = lastRecipe.id + 1
  }

  data.recipes.push({
    id,
    name,
    author_recipe,
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
  const { id } = req.body 
  let index = 0

  const foundRecipe = data.recipes.find(function(recipe, foundIndex){
    if(id == recipe.id) {
      index = foundIndex
      return true
    }
  })

  if(!foundRecipe) return res.send("Receita não encontrada.")

  const recipe = {
    ...foundRecipe,
    ...req.body,
    id: Number(req.body.id)
  }

  data.recipes[index] = recipe

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Erro de escrita!")

    return res.redirect(`/admin/recipes/${id}`)
  })
}
exports.delete = function(req, res){
  const { id } = req.body

  const filteredRecipes = data.recipes.filter(function(recipe){
    return recipe.id != id
  })

  data.recipes = filteredRecipes

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Erro de escrita.")

    return res.redirect("/admin/recipes")
  })
}