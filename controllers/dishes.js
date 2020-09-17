const dishes = require("../data")

exports.home = function(req, res){
  return res.render("dishes/home", { dishes })
}
exports.about = function(req, res){
  return res.render("dishes/about")
}
exports.show = function (req, res) {
  const id = req.params.id;

  return res.render("dishes/dishes", { dish:dishes[id] } );
}