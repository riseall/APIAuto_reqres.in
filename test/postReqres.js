const assert = require("assert");

describe("Post Reqres", function () {
  this.timeout(10000);

  it("should create a new user and return status 201", async function () {
    const url = "https://reqres.in/api/users";
    const reqData = {
      name: "Luffy",
      job: "leader",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    });

    const data = await response.json();
    console.log("Response Post :" + JSON.stringify(data, null, 2));

    assert.strictEqual(response.status, 201);
  });
});
