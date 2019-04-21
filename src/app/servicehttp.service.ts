import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
//import { UserLog } from './login/UserLog';
import { Observable } from 'rxjs';
import { User } from '../../../BackEnd/models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicehttpService {
 // uri='http://192.168.43.93:3000/';

  constructor(private http:HttpClient, private r:Router) { }

  setTkn(j:string)
  {
  	localStorage.setItem('x-token', j);
  }

  getTkn()
  {
  	return localStorage.getItem('x-token');
  }
   crUser(j:User)
  {
  	return this.http.post("http://192.168.43.93:3000/newUser", j);
  } 
  email;
  chUser(l,p,t): Observable<HttpResponse<User>>
  {
    this.email=l;
    console.log(this.email);
  	return this.http.post<User>("http://192.168.43.93:3000/checkUser",{"email":l,"password":p,"token":t} , {observe: 'response'});
  }

  //logout
be:string;
  lout()
  {
  	this.be = localStorage.getItem('x-token');
  	localStorage.removeItem('x-token');
  	return this.http.post("http://192.168.43.93:3000/logOut", {'token':this.be});
  }
/* j;
  logout(){
    this.j= localStorage.getItem("x-token");
    console.log(this.j);
    localStorage.removeItem("x-token");
     return this.http.post('http://localhost:3000/logout_user',{"token":this.j});
  
  } */

  //rating
  toc:string;
  addRating(value){
    console.log(value);
  	this.toc = localStorage.getItem('x-token');
    this.http.post("http://192.168.43.93:3000/rating",
    {'token':this.toc, 'Rating': value}).subscribe((res)=>{console.log("submitted")});
  }


  //home
 
  data= this.http.get("http://192.168.43.93:3000/ShowAllnews");

  HNews = this.http.post("http://192.168.43.93:3000/findHin", "Sports");

  BllNews = this.http.post("http://192.168.43.93:3000/Bollywood", "Bollywood");
  //-------------------------------------
  shnews;
  sho(i){
    this.shnews=i;    
  }
  returnsho(){
    return this.shnews; 
  }
  arnews;
  returnnews(){
    console.log(this.arnews);
    return this.arnews;
  }

  saved(t,d,u){
    console.log(t,d,u,this.email);
    this.http.post('http://192.168.43.93:3000/save_news',
    {"title":t,"desc":d,"url":u,"useremail":this.email}).subscribe((res)=> 
    {console.log("done");
  });
  }

  sav(){
    console.log(this.email);
    let params:HttpParams = new HttpParams().set("useremail",this.email);
    return this.http.get('http://192.168.43.93:3000/save_new',{params});
  }
  Show_Save = this.http.get('http://192.168.43.93:3000/save_newss',this.email);
  sa;
  setsav(s){
    this.sa=s;
  }
  returnsav(){
    return this.sa;
    
  }
  
  Delsav(i){
    console.log(this.email);

    this.http.post('http://192.168.43.93:3000/Delsav',{"useremail":this.email, "title":i.Name})
    .subscribe((res)=> {console.log("done");
  });
  }

  re(){
    console.log(this.email);

    this.http.post('http://192.168.43.93:3000/re',{"useremail":this.email})
    .subscribe((res)=> {console.log("done");
  });
  }

  data1(){
    return this.http.get('http://192.168.43.93:3000/home');
  }

  
}
