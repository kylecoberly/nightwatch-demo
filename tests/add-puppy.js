module.exports = {
    "It can add a puppy": function(browser){
        browser
            .url("http://localhost:3000")
            .waitForElementVisible("h1", 1000)
            .assert.urlEquals("http://localhost:3000/puppies")
            .assert.containsText("h1", "BarkWire")
            .click(".add")
            .waitForElementVisible("h1", 1000)
            .assert.urlEquals("http://localhost:3000/puppies/new")
            .setValue("input[name=name]", "Arf Vader")
            .setValue("input[name=imageURL]", "http://localhost:3000/images/dog4.jpg")
            .setValue("input[name=imageCaption]", "I just want something simple")
            .setValue("input[name=description]", "Don't let my scruffy exterior fool you. I love to be held. I'm a 15-year-old dog looking for a serious relationship.")
            .submitForm("form")
            .waitForElementVisible("h1", 1000)
            .assert.urlEquals("http://localhost:3000/puppies")
            .assert.containsText(".puppy:nth-child(4) h3", "Arf Vader")
            .assert.attributeEquals(".puppy:nth-child(4) img", "src", "http://localhost:3000/images/dog4.jpg")
            .assert.attributeEquals(".puppy:nth-child(4) img", "alt", "Arf Vader")
            .assert.containsText(".puppy:nth-child(4) p", "Don't let my scruffy exterior fool you. I love to be held. I'm a 15-year-old dog looking for a serious relationship.")
            .end();
    }
};
