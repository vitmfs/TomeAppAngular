import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss']
})
export class StepListComponent implements OnInit {

  testStepList = ['One', 'Two', 'Three'];


  constructor() { }

  ngOnInit(): void {
  }

}
