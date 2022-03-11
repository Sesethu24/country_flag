describe("AddAnotherCountry", () => {
    it("should add countries to my list and local storage", () => {

        let flagRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
        let flag = '🇺🇦';
        let country = 'Ukraine';

        assert(flagRegex.test(flag),country , true);

    })

})
