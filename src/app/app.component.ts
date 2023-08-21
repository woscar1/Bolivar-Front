import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Cliente';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService){}

  ngOnInit(): void {
    this.getUser();
    this.setCurrentUser();
  }

  getUser(){
    this.http.get('http://localhost:5175/api/user').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete:() => {}    
    })
  }

  setCurrentUser(){
    const userString= localStorage.getItem('user');
    if(!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
