const _id = Symbol("id");
const _roadNo = Symbol("roadNo");
const _city = Symbol("city");
const _region = Symbol("region");
const _country = Symbol("country");
const _postalCode = Symbol("postalCode");

class Address {
  constructor({ id, roadNo, city, region, country, postalCode }) {
    this[_id] = id;
    this[_roadNo] = roadNo || "";
    this[_city] = city || "";
    this[_region] = region || "";
    this[_country] = country || "";
    this[_postalCode] = postalCode || "";
  }
  get id() {
    return this[_id];
  }
  get roadNo() {
    return this[_roadNo];
  }
  set roadNo(value) {
    this[_roadNo] = value;
  }
  get city() {
    return this[_city];
  }
  set city(value) {
    this[_city] = value;
  }
  get region() {
    return this[_region];
  }
  set region(value) {
    this[_region] = value;
  }
  get county() {
    return this[_county];
  }
  set county(value) {
    this[_county] = value;
  }
  get postalCode() {
    return this[_postalCode];
  }
  set postalCode(value) {
    this[_postalCode] = value;
  }

  toString() {
    return `
        RoadNo : ${this[_roadNo]},
        city : ${this[_city]},
        region : ${this[_region]},
        country : ${this[_country]},
        postalCode : ${this[_postalCode]},
        
        `;
  }
}

module.exports = Address;
