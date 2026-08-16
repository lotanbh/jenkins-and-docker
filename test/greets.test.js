const { test } = require("node:test");
const assert = require("node:assert");
const { greets, randomGreet } = require("../greets");

test("greeting contains more than 5 characters", () => {
    assert.ok(greets.length >= 5, "Greeting should contain more than 5 characters");
});

test("every greeting should not being empty", () => {
    // for (let i = 0; i < greets.length; i++) {אופציה 1
    // for (const greet of greets) {אופציה 2
    greets.forEach((greet) => {
        assert.ok(greet.length > 0, "Greeting message should not be empty");
        // assert.strictEqual(typeof greet, "string", "Greeting message should be a string");
        // assert.ok(greet.trim().length > 0, "Greeting message should not be empty");
    });
});

test('Greets returns a random greeting from the greets array', () => {
    const randomGreeting = randomGreet();
    assert.ok(greets.includes(randomGreeting), 'randomGreet should return a greeting from the greets array');
});

