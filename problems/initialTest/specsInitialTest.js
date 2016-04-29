describe("javaScript", function () {
  describe("number data types", function () {
    it("should have number data types", function () {
      expect(1).to.be.a('number');
    });
    
    it("should add number data", function () {
      expect(1 + 1).to.equal(2);
    });
    
    it("should run accurate comparison of numbers", function () {
      expect(1 < 2).to.equal(true);
      expect(2 > 1).to.equal(true);
      expect(1 === 1).to.equal(true);
      expect(2 < 1).to.equal(false);
    }); 
  });
   
});
