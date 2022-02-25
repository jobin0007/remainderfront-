import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options = {
headers: new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUserName:any
  currentUserId:any
  users:any={
    100:{userid:100,uname:"amal",password:"100",event_date:"12thjanuary2021",event_name:"trip",event:[]},
    101:{userid:101,uname:"althaf",password:"101",event_date:"5thmarch2021",event_name:"trip",event:[]},
    102:{userid:102,uname:"sanal",password:"102",event_date:"20thdecember2021",event_name:"trip",event:[]}
}
  constructor(private http:HttpClient) { }
  login(userid:any,password:any){
     const data ={
       userid,
       password
     }
     return this.http.post('http://localhost:3001/login',data)
  }
register(userid:any,password:any,uname:any,email:any){
 const data ={
   userid,
   password,
   uname,
   email
  
 }
 return this.http.post('http://localhost:3001/register',data)
}

adds(userid:any,eventname:any,eventdate:any){
   const data = {
        userid,
        eventname,
        eventdate
      }
      return this.http.post('http://localhost:3001/adds',data)
    }
  

  }