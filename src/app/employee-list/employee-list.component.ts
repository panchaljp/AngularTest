import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employee-list',
  template: `<ul *ngFor="let employee of employees">
  <li>{{employee.name}} - {{employee.age}}</li>
  </ul>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  constructor(private _employeeService: EmployeeService) { }
  employees: IEmployee[];

  ngOnInit() {
    this._employeeService.getEmployee()
      .subscribe((data: IEmployee[]) => {
        this.employees = data;
      });
  }

}
