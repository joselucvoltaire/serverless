const multiply = require("../multiply");

test('multiply 5 * 3 to equal 15', () => {
    expect(multiply(5, 3)).toBe(15);
});