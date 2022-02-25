import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user_id=""
  pass=""
  uname=""
  email=""

  constructor(private router:Router,private ds : DataService ,private fb:FormBuilder) { }
  registerForm = this.fb.group({
    user_id:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],

  })
  ngOnInit(): void {
  }
  register(){
     if(this.registerForm.valid){
      var userid=this.registerForm.value.user_id
      var password =this.registerForm.value.pass
      var uname= this.registerForm.value.uname
      var email = this.registerForm.value.email
      this.ds.register(userid,password,uname,email)
      .subscribe((result:any)=>{
         if(result){
           alert(result.message)
          this.router.navigateByUrl('')
         }
      },(result)=>{
        alert(result.error.message)
      }
      )
     }
     else{
       alert("Invalid form")
     }
  }

}
