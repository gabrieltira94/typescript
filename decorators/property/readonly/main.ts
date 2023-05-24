import { readonly } from "./readonly.decorator";

class Person {
  @readonly
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("John");
person.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.

console.log(person.name); // Output: John