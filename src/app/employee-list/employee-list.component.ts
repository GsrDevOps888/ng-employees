import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() employees: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit(
  ) {
    this.employeeService
      .getEmployees()
      .then(employees => this.employees = employees);
  }

}
