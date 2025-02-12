const assert = require("assert");

describe("Delete Reqres", function () {
  this.timeout(10000);

  it("Delete data should be success", async function () {
    const res = await fetch("https://reqres.in/api/users/5", {
      method: "DELETE",
    });

    assert.strictEqual(res.status, 204);
  });
});
