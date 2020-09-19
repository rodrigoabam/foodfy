const dishes = require('../data')

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
  return res.send("1")
}
exports.put = function(req, res){
  return res.send("2")
}
exports.delete = function(req, res){
  return res.send("3")
}