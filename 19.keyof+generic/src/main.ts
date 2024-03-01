interface Person {
  name: string;
  age: number;
  address: string;
}

const person: Person = {
  name: "John",
  age: 30,
  address: "seoul",
};

const age = getProperty(person, "age");
const name = getProperty(person, "name");
const invalid = getProperty(person, "invalid");

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
