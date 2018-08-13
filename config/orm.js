var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (tableInput, colName, colVal, cb) {
        var queryString = "INSERT INTO " + tableInput + " (" + colName + ")" + " VALUES (?)";
        connection.query(queryString, colVal, function (err, result) {
            console.log(queryString);
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (tableInput, colName, colVal, colName2, colVal2, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colName, colVal, colName2, colVal2], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};

module.exports = orm;