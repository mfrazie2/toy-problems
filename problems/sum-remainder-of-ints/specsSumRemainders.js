describe("Sum Remainders", function () {
  it("should have a function called sumRemainders", function () {
    expect(sumRemainders).to.exist;
  });
  
  describe('sumRemainders', function () {
    it("should be a function", function () {
      expect(typeof sumRemainders).to.equal('function');
    });
    
    it("should return a number", function () {
      expect(typeof (sumRemainders(10, 5))).to.equal('number');
    });
    
    it("should only accept numbers as arguments", function () {
      var result = sumRemainders(true, true);
      var result2 = sumRemainders('string', 'string');
      var result3 = sumRemainders();
      var result4 = sumRemainders(10, 5);
      
      expect(result).to.equal("Must pass numbers are arguments");
      expect(result2).to.equal("Must pass numbers are arguments");
      expect(result3).to.equal("Must pass numbers are arguments");
      expect(result4).to.be.a("number");
    });
    
    it("should return the sum of remainders", function () {
      var result = sumRemainders(10,5);
      var result2 = sumRemainders(15, 6);
      var result3 = sumRemainders(100, 3);
      var result4 = sumRemainders(100, 17);
      var result5 = sumRemainders(20, 20);
      
      expect(result).to.equal(20);
      expect(result2).to.equal(36);
      expect(result3).to.equal(100);
      expect(result4).to.equal(800);
      expect(result5).to.equal(190);
    });
  });
  
});
