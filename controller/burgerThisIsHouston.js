// express
var express = require('express');
// router
var router = express.Router();

// REQUIRE IMPORTED MODEL (burger.js) to use the db-functionality
var burger = require('../models/burger');
/**
 * 
 // create all routes and 
 set up logic within those routes 
 * \/\/\/\/~~ BELOW ~~\/\/\/\/
 */
//router.get
router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

//router.post
router.post("/api/burgers", (req,res) => {
    burger.create([
        "name", "slapped"
    ], [
        req.body.name, req.body.slapped
    ], (result) => {
        res.json({ id: result.insertId });
    });
});

//router.put (and .update)
router.put("/api/burgers/:id", (req,res) => {
    var condition = "id = "+req.params.id;

    console.log("condition", condition);

    burger.update({
        slapped: req.body.slapped
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//router.delete
router.delete("api/burgers/:id", (req,res) => {
    var condition = "id = "+req.params.id;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//======================
// EXPORT ROUTER (router)
module.exports = router;