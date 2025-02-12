const assert = require("assert");

describe("Patch Reqres", function () {
  this.timeout(10000);

  it("should update a user and return status 200", async function () {
    const url = "https://reqres.in/api/users/3";
    const reqData = {
      name: "Zoro",
      job: "co leader",
    };

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    });

    const data = await response.json();
    console.log("Response Update: " + JSON.stringify(data, null, 2));

    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.name, "Zoro");
    assert.strictEqual(data.job, "co leader");
  });
});
