import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }

  addEmployee(firstName: HTMLInputElement,
    lastName: HTMLInputElement,
    salary: HTMLInputElement): boolean {
      return this.employeeService.
        addEmployee(firstName, lastName, salary);
    }
}
