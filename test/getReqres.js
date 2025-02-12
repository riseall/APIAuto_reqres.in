const assert = require("assert");

describe("Get Reqres", function () {
  this.timeout(10000);
  it("User with valid data should be success", async function () {
    const response = await fetch("https://reqres.in/api/users/2");
    const dataResponse = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(dataResponse.data.first_name, "Janet");
    console.log("Response Get :" + JSON.stringify(dataResponse, null, 2));
  });

  it("User with invalid data should be failed", async function () {
    const response = await fetch("https://reqres.in/api/users/23");

    assert.strictEqual(response.status, 404);
  });

  it("Data should return JSON response", async () => {
    const response = await fetch("https://reqres.in/api/users/4");

    assert.strictEqual(
      response.headers.get("content-type"),
      "application/json; charset=utf-8"
    );
  });
});
