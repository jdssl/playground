'use strict';

const assert = require('assert')
const AssertionError = require('assert').AssertionError

// Test #1 - strictEqual
try {
  console.log("++++++++++++++++++++++++++++++++++++")
  // assert.strictEqual(5, 10, "The values are not equal") // fail
  assert.strictEqual(5, 5, "The values are not equal")
  console.log("[TEST_SUCCESS]: Should receive same values")
} catch (error) {
  if (error instanceof AssertionError) {
    console.error(error)
  }
}

// Test #2 - deepStrictEqual
try {
  console.log("++++++++++++++++++++++++++++++++++++")
  // fail
  // assert.deepStrictEqual(
  //   { name: "Jonatan Lima", age: 26 },
  //   { name: "Carolina Patrício", age: 27},
  //    "The objects are equals"
  // )
  assert.deepStrictEqual(
    { name: "Jonatan Lima", age: 26 },
    { name: "Jonatan Lima", age: 26 },
    "The objects are equals"
  )
  console.log("[TEST_SUCCESS]: Should the objects are equals")
} catch (error) {
  if (error instanceof AssertionError) {
    console.error(error)
  }
}

// Test #3 - reject promise
try {
  console.log("++++++++++++++++++++++++++++++++++++")
  assert.rejects(async () => {
    return await Promise.reject({
      name: "John",
      age: "20"
    });
  }, {
    name: "John",
    age: "20"
  }, "Promise resolved!");
  console.log("[TEST_SUCCESS]: Should Promise resolved")
} catch (error) {
  if (error instanceof AssertionError) {
    console.error(error)
  }
}
