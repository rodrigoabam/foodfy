const dishes = require("../data")

exports.home = function(req, res){
  return res.render("home", { dishes })
}

exports.about = function(req, res){
  return res.render("about")
}

exports.show = function (req, res) {
  const id = req.params.id;

  return res.render("dishes", { dish:dishes[id] } );
}