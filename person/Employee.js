const UniPerson = require("./UniPerson");
const _employeeId = Symbol("employeeId");
const _salary = Symbol("salary");

class Employee {
  constructor(id, name, employeeId, guardian) {
    super(id, name);
    this[_employeeId] = employeeId;
    this[_salary] = null;
  }
  get employeeId() {
    return this[_employeeId];
  }

  get salary() {
    return this[_salary];
  }
  set salary(value) {
    this[_salary] = value;
  }
  toString() {
    return `${super.toString()} employeeId = ${this[_employeeId]},${
      this[_salary]
    }`;
  }
}

module.exports = Employee;
