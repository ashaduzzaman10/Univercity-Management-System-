const _id = Symbol("id");
const _name = Symbol("name");
const _subjects = Symbol("subjecst");
const _dean = Symbol("dean");
const _teacher = Symbol("teacher");

class Department {
  constructor({ id, name, subjects, dean, teacher }) {
    this[_id] = id;
    this[_name] = name || "";
    this[_subjects] = subjects || "";
    this[_dean] = dean || "";
    this[_teacher] = tea_teacher || "";
  }
  get id() {
    return this[_id];
  }
  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }

  get subjects() {
    return this[_subjects];
  }
  set subjects(value) {
    this[_subjects] = value;
  }

  get dean() {
    return this[_dean];
  }
  set dean(value) {
    this[_dean] = value;
  }

  get teacher() {
    return this[_teacher];
  }
  set teacher(value) {
    this[_teacher] = value;
  }

  toString() {
    return `
        id : ${this[_id]},
        name : ${this[_name]},
        dean : ${this[_dean]},
        teacher : ${this[_teacher]},
        `;
  }
}

module.exports = Department;
