import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'argon-dashboard-angular';
  ngOnInit(){
    alert("for your kind inform that to enter to Admin dashboard and management access try to comment 'canActivate : [LoginServicesService]' code line in 'app.routing' file if you don't have API token which is returned with login response ... ")
  }
}
