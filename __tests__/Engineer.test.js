// bring in the employee 
const Employee = require('../lib/Engineer');

// TEST FOR SETTERS //
test("Can set name via getName() arguments", () => {
    // variable for name
    // variable for new Employee(passing in the variable for name here)   
    const employee = new Employee('Anderson');
     // set up your expect and to be  
    expect(employee.getName()).toBe(employee.name);
});


test("Can set id via getId() arguments this case a number since its an id", () => {
    const employee = new Employee('Anderson', 300);
    expect(employee.getId()).toBe(employee.id);
});

test("Can set email via getEmail() arguments", () => {
    const employee = new Employee('Anderson', 'anderson@fakemail.com');
    expect(employee.email).toBe(employee.email);
});

test("Can set github via getGithub() arguments", () => {
    const employee = new Employee('Anderson', 'andersonptz');
    expect(employee.github).toBe(employee.github);
});





