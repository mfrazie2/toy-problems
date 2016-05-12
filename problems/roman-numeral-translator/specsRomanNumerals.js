describe("Roman Numeral Translator", function () {
  describe("romanNumeralHash", function () {
    it("should exist", function () {
      expect(romanNumeralHash).to.exist;
    });
    it("should be an object", function () {
      expect(romanNumeralHash).to.be.a("object");
    });
    it("should contain Roman Numeral keys and number values", function () {
      expect(romanNumeralHash["I"]).to.equal(1);
      expect(romanNumeralHash["V"]).to.equal(5);
      expect(romanNumeralHash["X"]).to.equal(10);
      expect(romanNumeralHash["L"]).to.equal(50);
      expect(romanNumeralHash["C"]).to.equal(100);
      expect(romanNumeralHash["D"]).to.equal(500);
      expect(romanNumeralHash["M"]).to.equal(1000);
    })
  });
  
  describe("romanNumeralTranslator", function () {
    it("should exist", function () {
      expect(romanNumeralTranslator).to.exist;
    });
    it("should be a function", function () {
      expect(romanNumeralTranslator).to.be.a("function");
    });
    it("should return a number when passed a Roman Numeral", function () {
      expect(romanNumeralTranslator("I")).to.be.a("number");
    });
    it("should return `null` when passed a non-Roman numeral argument", function () {
      expect(romanNumeralTranslator(1)).to.equal(null);
      expect(romanNumeralTranslator("hours")).to.equal(null);
      expect(romanNumeralTranslator( [ ] )).to.equal(null);
      expect(romanNumeralTranslator( { } )).to.equal(null);
    });
    it("should return correct numerical value when passed a Roman Numeral", function () {
      expect(romanNumeralTranslator("I")).to.equal(1);
      expect(romanNumeralTranslator("IV")).to.equal(4);
      expect(romanNumeralTranslator("VI")).to.equal(6);
      expect(romanNumeralTranslator("XXV")).to.equal(25);
      expect(romanNumeralTranslator("XCIX")).to.equal(99);
      expect(romanNumeralTranslator("MCMXC")).to.equal(1990);
      expect(romanNumeralTranslator("MDCCCCX")).to.equal(1910);
      expect(romanNumeralTranslator("C")).to.equal(100);
      expect(romanNumeralTranslator("MCMLIV")).to.equal(1954);
      expect(romanNumeralTranslator("LX")).to.equal(60);
      expect(romanNumeralTranslator("II")).to.equal(2);
      expect(romanNumeralTranslator("MCM")).to.equal(1900);
      expect(romanNumeralTranslator("MMVIII")).to.equal(2008);
      expect(romanNumeralTranslator("D")).to.equal(500);
      expect(romanNumeralTranslator("L")).to.equal(50);
      expect(romanNumeralTranslator("XV")).to.equal(15);
      expect(romanNumeralTranslator("M")).to.equal(1000);
      expect(romanNumeralTranslator("V")).to.equal(5);
      expect(romanNumeralTranslator("VII")).to.equal(7);
      expect(romanNumeralTranslator("MCMX")).to.equal(1910);
    });
  });

});
