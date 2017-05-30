var db = require("../models");

module.exports = function(app) {

  // get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/todo");
});

  router.get("/todo", function(req, res) {
  db.Task.findall({
  }).then(function(dbPost){
    // into the main index, updating the page
    var hbsObject = {
      todo: dbPost
    };
    return res.render("index", hbsObject);
  })
  });

  post route -> back to index
  router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for buger.addBurger
    burger.create(req.body.burger_name, function(result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });

  put route -> back to index
  router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result) {
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });


};
