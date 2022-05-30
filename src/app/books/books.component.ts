import { Component, OnInit } from '@angular/core';
import { db } from './../../assets/db';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  db = db;

  constructor() { }

  ngOnInit(): void {

  }

}
