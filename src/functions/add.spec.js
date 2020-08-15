function add(a, b) {
  return +a + +b;
}

describe("Test Add Function", () => {
  it("should Add 1,5 correctly", () => {
    const result = add(1, 5);
    expect(result).toBe(6);
  });

  it('should Add "1",5 correctly', () => {
    const result = add("1", 5);
    expect(result).toBe(6);
  });

  it('should Add "1","5" correctly', () => {
    const result = add("1", "5");
    expect(result).toBe(6);
  });

  it('should Add "dsdas","dsd" correctly', () => {
    const result = add("1dsada", "5dasdasd");
    expect(result).toBe(NaN);
  });

  it('should Add "dsdas","dsd" correctly', () => {
    const result = add();
    expect(result).toBe(NaN);
  });
});
