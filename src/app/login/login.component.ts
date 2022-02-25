import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_id=""
  pwd="" 
  constructor(private router:Router ,private ds : DataService,private fb:FormBuilder ) { }
   loginForm=this.fb.group({
     user_id:['',[Validators.required,Validators.pattern('[0-9]*')]],
     pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

   })
  ngOnInit(): void {
  }
  // login(){
  //   var user = this.loginForm.value.user_id; 
  //   var password = this.loginForm.value.password;
  //   if(this.loginForm.valid){
  //    this.ds.login(user,password)
  //    .subscribe((result:any)=>{
  //      if(result){
  //        alert(result.message)
  //        localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
  //        localStorage.setItem("currentUserName",JSON.stringify(result.currentUserName))
  //        localStorage.setItem("token",JSON.stringify(result.token))
  //        this.router.navigateByUrl("dashboard")
  //      }
  //     },
  //      (result)=>{
       
  //        alert(result.error.message)
  //      }

  //    )
  //   }
  //   else{
  //     alert("Invalid Form")
  //   }
  // }

login(){
var userid=this.loginForm.value.user_id
var password=this.loginForm.value.pwd
if(this.loginForm.valid)  
{  
this.ds.login(userid,password)
.subscribe((result:any)=>{
if(result){
alert(result.message)
localStorage.setItem(" currentUser",JSON.stringify(result.currentu))
localStorage.setItem(" currentUserName",JSON.stringify(result.currentUserName))
localStorage.setItem("token",JSON.stringify(result.token))
this.router.navigateByUrl("dashboard")
}
},
(result)=>{
alert(result.error.message)
}
)  
}
else{
alert("Invalid Form")
}
}
}
//  ,
// currentUserName,
// 
