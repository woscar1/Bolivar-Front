import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = {}
  loggedIn = false;
  users: any;

  constructor(private http: HttpClient) { }
   
  ngOnInit(): void {
    
  } 
}
