const add = require("../add");

test('add 5 + 1 to equal 6', () => {
    expect(add(5, 1)).toBe(6);
});