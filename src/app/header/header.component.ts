import { Component, OnInit } from '@angular/core';
import { db } from './../../assets/db';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  numberOfCredentials: number = db.allcourses.length;

  constructor() { }

  ngOnInit(): void {
  }

}
