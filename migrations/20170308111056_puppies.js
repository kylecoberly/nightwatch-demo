exports.up = function(knex, Promise) {
    return knex.schema.createTable("puppy", function(puppy){
        puppy.increments("id");
        puppy.string("name");
        puppy.string("imageURL");
        puppy.string("imageCaption");
        puppy.string("description");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("puppy");
};
