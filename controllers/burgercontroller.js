
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.insert([
    req.body.burger_name
  ], function(result) {
    res.redirect('/');
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = req.params.id;

  burger.update({
    devoured: req.body.status
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;   

	burgers.delete(condition, function () {
		res.redirect('/burgers');
	});
});


module.exports = router;