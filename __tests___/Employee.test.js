// bring in employee
const { default: expect } = require('expect');
const { test } = require('picomatch');
const Employee = require('../lib/Employee');

// test for instantiating an Employee instance
test('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

// TEST FOR SETTERS //
test("Can set name via getName() arguments", () => {
    // variable for name
    // variable for new Employee(passing in the variable for name here)   
    const employee = new Employee('Oliver');
     // set up your expect and to be  
    expect(employee.getName()).toBe(employee.name);
   
});

test("Can set id via getId() argumentsn this case a number since its an id
    const testValue = 100;


})