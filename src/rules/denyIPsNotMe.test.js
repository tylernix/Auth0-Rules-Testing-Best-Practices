const denyIPsNotMe = require("./denyIPsNotMe.js");
describe(denyIPsNotMe, () => {
  it("should pass return null as error", () => {
    expect.hasAssertions();
    const context = {
      request: {
        ip: "47.220.7.162"
      },
    };
    const user = {};
    const callback = (err) => {
      expect(err).toBeNull();
    };

    denyIPsNotMe(user, context, callback);
  });
  it("should return error", () => {
    expect.hasAssertions();
    const context = {
      request: {
        ip: "47.220.7.000"
      },
    };
    const user = {};
    const callback = (err) => {
      console.log(err);
      expect(err).not.toBeNull();
    };

    denyIPsNotMe(user, context, callback);
  });
});
