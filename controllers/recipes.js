const dishes = require('../data')

exports.home = function(req, res){
  return res.render("admin/home", { dishes })
}
