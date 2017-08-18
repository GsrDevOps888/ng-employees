import { Injectable } from '@angular/core';
import { Employee } from './employee'

@Injectable()
export class EmployeeService {
  employees: Employee[];

  constructor() {
    this.employees = [
      new Employee("Durga", "Gadiraju", 1000),
      new Employee("John", "Michael", 1500)
    ]
  }

  public addEmployee(firstName: HTMLInputElement,
    lastName: HTMLInputElement,
    salary: HTMLInputElement): boolean {
    console.log(`Adding First Name: ${firstName.value},
      Last Name: ${lastName.value}
      and Salary: Number(${salary.value})`);
      this.employees.push(new Employee(firstName.value, lastName.value, Number(salary.value)));
      firstName.value = '';
      lastName.value = '';
      salary.value = '';
      return false;
  }

  public getEmployees(): Promise<Employee[]> {
    return Promise.resolve(this.employees);
  }

  public deleteEmployee(i: number): void {
    this.employees.splice(i, 1);
  }
}
