import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any
 
  constructor(
    private router:Router,private ds:DataService) {
    if(localStorage.getItem("currentUserName")){
    this.user=JSON.parse(localStorage.getItem("currentUserName") ||"")
   }
   }

  ngOnInit(): void {
    if( ! localStorage.getItem("token")){
      alert("Please Login")
       this.router.navigateByUrl("")
 
      }
  }
  logOut(){
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUserName")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }

}
