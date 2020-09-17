const filePath = "./src/rules/ipAddressWhitelist.js";
const _ipAddressWhitelist = require("./auth0Rules.boiler.js")(filePath);
describe(eval(_ipAddressWhitelist), () => {
  it("should pass: return null as error", () => {
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

    // eslint-disable-next-line no-undef
    ipAddressWhitelist(user, context, callback);
  });
  it("should pass: return error", () => {
    expect.hasAssertions();
    const context = {
      request: {
        ip: "47.220.7.0"
      },
    };
    const user = {};
    const callback = (err) => {
      console.log(err);
      expect(err).not.toBeNull();
    };

    // eslint-disable-next-line no-undef
    ipAddressWhitelist(user, context, callback);
  });
});
