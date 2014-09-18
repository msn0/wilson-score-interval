describe("wilson", function () {
  it("should return two values - left and right", function () {
    expect(wilson(1,2).left).toBeDefined();
    expect(wilson(1,2).right).toBeDefined();
  });
  it("left should be less than right", function () {
    expect(wilson(1,2).left < wilson(2,3).left).toBeTruthy();
  });
  it("should return (0,0) for up=0, total=0", function () {
    var w = wilson(0, 0);
    expect(w.left).toEqual(0);
    expect(w.right).toEqual(0);
  });
  it("should return left=0 for up=0, total!=0", function () {
    var w = wilson(0, 99);
    expect(w.left).toEqual(0);
  });
  it("should return higher value for more up's", function () {
    expect(wilson(1, 10).left < wilson(2, 10).left).toBeTruthy();
    expect(wilson(1, 10).right < wilson(2, 10).right).toBeTruthy();
  });
  it("should return higher left for proportionally bigger sample", function () {
    expect(wilson(5, 50).left < wilson(10, 100).left).toBeTruthy();
  });
  it("should return proper value", function () {
    expect(wilson(4097, 4985).left).toEqual(0.8109971539140524);
  });
});
