// bring in employee
const Employee = require('../lib/Manager');

// TEST FOR SETTERS //
test("Can set name via getName() arguments", () => {
    // variable for name
    // variable for new Employee(passing in the variable for name here)   
    const employee = new Employee('Oliver');
     // set up your expect and to be  
    expect(employee.getName()).toBe(employee.name);
   
});

test("Can set id via getId() arguments this case a number since its an id", () => {
    const employee = new Employee('Craig', 200);
    expect(employee.getId()).toBe(employee.id);
});

test("Can set email via getEmail() arguments", () => {
    // new employee passing the variable email
    // const emailValue = 'oliver@fakemail.com';
    const employee = new Employee('Craig', 'craig@fakemail.com');
    expect(employee.email).toBe(employee.email);
});

test("Can set office number via getOfficeNumber() arguments", () => {
    const employee = new Employee('Craig', 5);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
});

