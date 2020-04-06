import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {  } from 'protractor';

@Component({
  selector: 'app-test',
  template: `
  <h2> 
    {{"Hello " + parentData}}
    <button (click)="fireEvent()">Send to APP</button>
  </h2>
  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  public person = {"firstname":"Prachi", "lastname":"Atalia"};
  public currency = "0.5";
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Bella Chio'); 
  }
}
