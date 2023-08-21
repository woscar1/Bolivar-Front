import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  loggedIn = false;
  users: any;

  constructor(private accountService: AccountService) { }
   
  ngOnInit(): void {    
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      next: user => this.loggedIn = !!user,
      error: error => console.log(error)
    })
  }

  login(){  
    this.accountService.login(this.model).subscribe({
      next: response =>{ console.log(response);        
      },
      error: error => console.log(error),
      complete:() => {}    
    })   
  }

  logout(){
    this.model = {};
    this.accountService.logout();
    this.loggedIn = false
  }
}
