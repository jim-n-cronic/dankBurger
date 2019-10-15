// IMPORT ORM from config folder
var ORM = require('../config/orm');
// define burger variable
var burger = {
    all: (cb) => {
        ORM.all("burgers", (res) => {
            cb(res);
        });
    },
    create: (cols,vals,cb) => {
        ORM.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objColVals,condition,cb) => {
        ORM.update("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },
    delete: (condition,cb) => {
        ORM.delete("cats", condition, (res) => {
            cb(res);
        });
    }
};

// export the burger varubale
module.exports = burger;