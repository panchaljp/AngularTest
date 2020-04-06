import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `<ul *ngFor="let employee of employees">
  <li>{{employee.name}} - {{employee.age}}</li>
  </ul>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployee()
      .subscribe(data => this.employees = data);
  }

}
