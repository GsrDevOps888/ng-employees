export class Employee {
  firstName: string;
  lastName: string;
  salary: number;

  constructor(firstName: string, lastName: string, salary?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary || 0;
  }

  increment(): void {
  	this.salary += 50.0;
  }

}
