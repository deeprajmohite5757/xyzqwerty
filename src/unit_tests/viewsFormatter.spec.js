describe("Views Formatter", () => {
  beforeEach(() => {});
  afterEach(() => {});
  it("Should return views in k's for range of thousands", () => {
    const actual = numFormatter(1111);
    const expected = "1.1K";
    expect(actual).toMatch(expected);
  });
  it("should return views in M's for range of Millions", () => {
    const actual = numFormatter(2200000);
    const expected = "2.2M";
    expect(actual).toMatch(expected);
  });
  it("should return views in number for less than 999", () => {
    const actual = numFormatter(999);
    const expected = "999";
    expect(actual).toMatch(expected);
  });
});
