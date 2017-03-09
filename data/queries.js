var config = require("../knexfile")[process.env.NODE_ENV || "development"];
var database = require("knex")(config);

function getPuppies(){
    return database("puppy").select();
}

function addPuppy(puppy){
    return database("puppy").insert(puppy);
}

module.exports = {
    getPuppies,
    addPuppy
}
