
// bring in employee
const { test } = require('picomatch');
const Employee = require('../lib/Employee');

// test for instantiating an Employee instance
test('Can instantiate Employee instance', {} => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

// TEST FOR SETTERS //
test("Can set name via constructro arguments", {} => {
    // variable for name
    // variable for new Employee(passing in the variable for name here)
    // set up your expect and to be 
});

test("Can set id via constructor argument", {} => {
    // variable for the test value, in this case a number since its an id
    const testValue = 100;


})