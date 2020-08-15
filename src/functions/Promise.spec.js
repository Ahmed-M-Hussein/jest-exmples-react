const addError = new Error("invalid Params");
function add(a, b) {
  return new Promise((resolve, reject) => {
    if (
      typeof a === ("number" || "string") &&
      typeof b === ("number" || "string")
    ) {
      setTimeout(() => {
        resolve(+a + +b);
      }, 5000);
    } else {
      reject(addError);
    }
  });
}

describe("Test Add Function", () => {
  // why not this
  it("should Add 1,5 correctly", () => {
    add(1, 5).then((addResult) => {
      expect(addResult).toBe(8);
    });
  });

  it("should Add 1,5 correctly", () => {
    return add(1, 5).then((addResult) => {
      expect(addResult).toBe(6);
    });
  });

  it("should Add empty prarams fail", () => {
    return add().catch((e) => expect(e.message).toMatch("invalid Params"));
  });
});
