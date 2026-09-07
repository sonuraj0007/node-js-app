const assert = require("assert");


function add(a, b) {

    return a + b;

}


function isValidTask(title) {

    return typeof title === "string" && title.trim().length > 0;

}


assert.strictEqual(add(2, 3), 5);

assert.strictEqual(isValidTask("Learn Jenkins"), true);

assert.strictEqual(isValidTask(""), false);

assert.strictEqual(isValidTask("   "), false);


console.log("All tests passed!");
