import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/serverservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent implements OnInit {

  public UserInfo;
  constructor(private serverService:ServerService,private http:HttpClient) {
    serverService.consoleLog("Service Opened From user Module...!");
   }

  ngOnInit() {
    this.http.get('https://api.github.com/users/rajeshsaha782').subscribe((response)=>{
      this.UserInfo=response;
      this.serverService.consoleLog(response);
    });
  }

}
