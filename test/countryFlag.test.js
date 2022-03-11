let assert = require("assert");
let addAnotherCountry = require("../addAnotherCountry");

describe('addAnotherCountry' , function(){
    it('should add a new country to my list' , function(){
        assert.deepEqual(addAnotherCountry('Ukraine,🇺🇦'),);
     });
    });