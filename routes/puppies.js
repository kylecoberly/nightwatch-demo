var express = require("express");
var router = express.Router();
var queries = require("../data/queries");

router.get("/", function(request, response) {
    queries.getPuppies().then(function(puppies){
        response.render("puppies-list", {puppies});
    });
});

router.get("/new", function(request, response){
    response.render("new-puppy", {});
});

router.post("/", function(request, response){
    queries.addPuppy(request.body).then(function(puppies){
        response.redirect("/");
    });
});

module.exports = router;
