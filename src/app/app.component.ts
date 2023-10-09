import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {

  } 

  title = 'HospitalManagementSystem.ts';
  ngOnInit(): void { }
  public register() {
    this.router.navigate(['/app-register']);
  }
  public login() {
    this.router.navigate(['/app-login']);
  }

  public gfg = false;
 
}




