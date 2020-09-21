const dishes = require('../data')
const fs = require('fs')

exports.index = function(req, res){
  return res.render("admin/recipes", { dishes })
}
exports.create = function(req, res){
  return res.render("admin/create", { dishes })
}
exports.show = function(req, res){
  return res.render("admin/show", { dishes })
}
exports.edit = function(req, res){
  return res.render("admin/recipes/:id/edit", { dishes })
}

exports.post = function(req, res){
  const keys = Object.keys(req.body)

  for(key of keys){
    if(req.body[key] == "") return res.send("Todos os campos são obrigatórios.")
  }

  fs.writeFile("data.json", JSON.stringify(req.body), function(err){
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