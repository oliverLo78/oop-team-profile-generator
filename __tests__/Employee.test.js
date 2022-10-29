// bring in employee
// const { default: expect } = require('expect');
// const { test } = require('picomatch');
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

test("Can set id via getId() arguments this case a number since its an id", () => {
    // const testValue = 100;
    const employee = new Employee('oliver', 100);
    expect(employee.getId()).toBe(employee.id);
});

test("Can set email via getEmail() arguments", () => {
    // new employee passing the variable email
    // const emailValue = 'oliver@fakemail.com';
    const employee = new Employee('oliver', 'oliver@fakemail.com');
    expect(employee.email).toBe(employee.email);
});

test("Can set role via getRole() arguments", () => {
    // const employeeRole = 'Manager';
    const employee = new Employee('oliver', 'Employee');
    expect(employee.getRole()).toBe('Employee');
});


