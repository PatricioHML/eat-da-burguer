// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insert: function (colVal,cb) {
        orm.insertOne("burger","name",colVal, function (res) {
            cb(res);
        });
    },
    update: function (colVal,colVal2, cb) {
        orm.updateOne("burger","devoured",colVal,"id",colVal2, function (res) {
            cb(res);
        });
    }
}


// Export the database functions for the controller (burgercontroller.js).
module.exports = burger;