const { Guardian } = require("./person");
const { Contact, Address } = require("./contact");
const guardian = new Guardian(1, "mr.abass uddin", "enginnerj", 19046484);
guardian.blood = "O+";
guardian.contact = new Contact({
  id: 1,
  email: "abass@test.com",
  phone: "208934543",
});
guardian.contact.Address = new Address({
  id: 1,
  roadNo: "6gd",
  city: "dhaka city",
  region: "dhaka",
  country: "bangladesh",
  postalCode: 1200,
});

const student = new student(1, 'abir', 'SD011', guardian);
student.blood = 'A+';
student.contact = new Contact({
  id: 2,
  email: "abir@test.com", 
  phone: '654546465489',
  alternativePhone: student.guardian.contact.phone,
  address: student.guardian.contact.address
});

console.log(student);