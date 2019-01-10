import { Component, OnInit } from '@angular/core';
import { database } from '../database';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css'],
  databases: ['']
})
export class DatabasesComponent implements OnInit {
	
 Database: database = {
  id: 1,
  name: "MyDatabase",
  server: "sql7.vitglobal.net",
  port: "1887"
  };

  constructor() { }

  ngOnInit() {
		
  }
  
  

}



