var db = require("../models");

module.exports = function(app) {
  // get route -> index
  app.get("/", function(req, res) {
    res.redirect("/burgers");
  });

  app.get("/burgers", function(req,res){
    //sequelize findall
  });

  app.post("/burgers/create", function(req, res){

  });

  app.post("/burgers/update", function(req, res){

  });

};


// router.get("/burgers", function(req, res) {
//   // express callback response by calling burger.selectAllBurger
//   burger.all(function(data) {
//     // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
//     var hbsObject = { burgers: data };
//     res.render("index", hbsObject);
//   });
// });

// post route -> back to index
// router.post("/burgers/create", function(req, res) {
//   // takes the request object using it as input for buger.addBurger
//   burger.create(req.body.burger_name, function(result) {
//     // wrapper for orm.js that using MySQL insert callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

// put route -> back to index
// router.put("/burgers/update", function(req, res) {
//   burger.update(req.body.burger_id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });
