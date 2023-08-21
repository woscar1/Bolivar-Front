import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl ='http://localhost:5175/api/user/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
usuario: any;

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.get<User>(this.baseUrl).pipe(
      map((response: User)=> {
        this.usuario = response;
        const user = response;
        for(const property in this.usuario){
          if(model.nombre == this.usuario[property].nombre && model.password == this.usuario[property].password){           
            localStorage.setItem('user', JSON.stringify(user))
            this.currentUserSource.next(user);
          }
        }       
      })

    )
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
