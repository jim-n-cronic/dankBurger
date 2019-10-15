// INPORT / REQUIRE THE CONNECTION to MYSQL
var connection = require('../config/connection');
    // define prior helper functions
    // 1.  pass 3 values into sqlQuery::3 question marks
        //["?","?","?"].toString() => "?,?,?";
        var printQuestionMrks = (num) => {
            var array = [];
            for (var i = 0; i < num; i++) {
                array.push("?");
            }
            return array.toString();
        }
    //2.  convert object key/value pairs to SQLSyntax   
    var objToSQL = (ohBee) => {
        var array = [];
        for (var key in ohBee) {
            var value = ohBee[key];
            if (Object.hasOwnProperty.call(ohBee,key)) {
                if (typeof value === "string" && value.indexOf(" ") >= 0) {
                    value = "'"+value+"'";
                }
                array.push(`${key} = ${value}`);
            }
        }
        return array.toString();
    } 
// OBJECT FOR ALL SQL STATMENTS-FUCNTIONS >> ORM
var ORM = {
    all: (tableINPUT, cb) => {
        var querySTR = "SELECT * FROM "+tableINPUT+";";
        connection.query(querySTR, (err, result) => {
            if (err) { 
                throw err;
            } else {
                cb(result);
            }
        });
    },
    create: (table,cols,vals,cb) => {
        var querySTR = "INSERT INTO"+table;
        querySTR += " (";
        querySTR += cols.toString();
        querySTR += ") ";
        querySTR += printQuestionMrks(vals.length);
        querySTR += ") ";

        console.log(querySTR);

        connection.query(querySTR, vals, (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    },
    update: (table,objColVals,condition,cb) => {
        var querySTR = "UPDATE "+table;
        querySTR += " SET ";
        querySTR += objToSQL(objColVals);
        querySTR += " WHERE ";
        querySTR += condition;

        console.log(querySTR);
        
        connection.query(querySTR, (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    },
    delete: (table, condition, cb) => {
        var querySTR = "DELETE FROM "+table;
        querySTR += " WHERE ";
        querySTR += condition;

        connection.query(querySTR, (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    }
};
// EXPORT THE ORM
module.exports = ORM