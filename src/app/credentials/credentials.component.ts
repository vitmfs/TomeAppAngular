import { Component, OnInit } from '@angular/core';
import { db } from './../../assets/db';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {

  originaldb = db;

  db = db;

  searchedDB = [];

  totalHours = 0;

  constructor() {

    this.sortList();

  }

  ngOnInit(): void {
  }

  sortList(): void {

    this.db.allcourses = this.originaldb.allcourses;

    this.db.allcourses.sort(function (a, b) {
      return b.hours - a.hours;
    });

    this.getTotalHours();
  }

  sortByDate(): void {

    this.db.allcourses = this.originaldb.allcourses;

    this.db.allcourses.sort(function (a, b) {
      const fa = a.date.toLowerCase();
      const  fb = b.date.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa < fb) {
          return 1;
      }
      return 0;
    });

    this.db.allcourses.reverse();

  }

  sortByProvider(): void {

    this.db.allcourses = this.originaldb.allcourses;

    this.db.allcourses.sort(function (a, b) {
      const fa = a.by.toLowerCase();
      const  fb = b.by.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa < fb) {
          return 1;
      }
      return 0;
    });

    // this.db.allcourses = this.db.allcourses.filter( (course)  => course.name.includes('CSS') );

    this.db.allcourses.reverse();

  }

  getDBObjects(name: string): object[] {
    return [];
  }

  getTotalHours(): number {

    this.totalHours = 0;

    for ( const item of this.originaldb.allcourses) {
      if (item.hours) {
        this.totalHours += Number(item.hours);


      }
    }

    // alert(this.totalHours);
    this.db.allcourses = this.originaldb.allcourses;
    return this.totalHours;
  }

  filterByDate(s1: string, s2: string): void {

    this.db.allcourses = this.originaldb.allcourses;

    let filteredDB = [];

    for ( const item of this.originaldb.allcourses) {
      if (item.date.localeCompare(s1) >= 0 && item.date.localeCompare(s2) <= 0) {
        filteredDB.push(item);


      }
    }

    this.db.allcourses = filteredDB;
  }



}


// REFERENCES
// https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
