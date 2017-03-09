exports.seed = function(knex, Promise) {
    return knex("puppy").del()
    .then(function(){
        return knex("puppy").insert([{
            id: 1,
            name: "Charles Barkley",
            description: "Fit, tan, single and ready to mingle. Up for a romantic walk this afternoon? I'm an adventurer who is looking for the right mate for endless playdates. I have exquisite taste, so if you're a foodie, call me.  We can chat about bones over the phone.",
            imageUrl: "images/dog1.jpg",
            imageCaption: "Me throwin' the bee around"
        },{
            id: 2,
            name: "Bilbo Waggins",
            description: "What's Valentine's Day without chocolate? I'm single, brown and a goofball looking for love. Let's plan a date made for two, or we can hang out with friends.",
            imageUrl: "images/dog2.jpg",
            imageCaption: "I'm into sports"
        },{
            id: 3,
            name: "Helga Hufflepup",
            description: "Warning: I'm a heartbreaker. But what princess isn't?  Falling in love with me is easy to do, so don't be surprised if you find yourself in a jewelry store shopping for princess-cut diamonds to throw at my feet. I'm looking for a prince to call my own.",
            imageUrl: "images/dog3.jpg",
            imageCaption: "My senior picture, lol"
        }]);
    });
};
