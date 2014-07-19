describe("wilson", function () {
  it("should return 0 for up=0, total=0", function () {
    expect(wilson(0, 0)).toEqual(0);
  });
  it("should return 0 for up=0, total!=0", function () {
    expect(wilson(0, 99)).toEqual(0);
  });
  it("should return higher value for more up's", function () {
    expect(wilson(1, 10) < wilson(2, 10)).toBeTruthy();
  });
  it("should return higher value for proportionally bigger sample", function () {
    expect(wilson(5, 50) < wilson(10, 100)).toBeTruthy();
  });
});