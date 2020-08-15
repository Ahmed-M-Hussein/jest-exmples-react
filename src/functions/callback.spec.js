function add(a, b, callback) {
  setTimeout(() => {
    callback(+a + +b);
  }, 4000);
}

describe("Test Add Function", () => {
  it("should Add 1,5 correctly", () => {
    add(1, 5, (addResult) => {
      expect(addResult).toBe(7);
    });
  });

//   it("should Add 1,5 correctly", (done) => {
//     function callback(addResult) {
//       try {
//         expect(addResult).toBe(6);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     }
//     add(1, 5, callback);
//   });

//   it("should Add 1,5 correctly", (done) => {
//     add(1, 5, (addResult) => {
//       try {
//         expect(addResult).toBe(6);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });
});
