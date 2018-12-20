import { Component, OnInit } from '@angular/core';
import { ServerService } from '../serverservice.service';

@Component({
  //selector: 'app-servers', //use as tag
  //selector: '[app-servers]', //use as attribute
  selector: '.app-servers', //use as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  disable = false;
  server = "Server Not Created!!";
  serverName = '';
  isServerCreated = false;
  id = 10;
  name = "Rajesh";
  constructor(private serverService: ServerService) {
    this.serverService=serverService;
    serverService.consoleLog("Service Opened From App Module...!");

    setTimeout(() => {
      this.disable = true;
    }, 5000);
  }
  ngOnInit() {
  }

  
  getServerId() {
    return this.id;
  }
  getServerName() {
    return this.name;
  }

  CreateServer() {
    this.isServerCreated = true;
    this.server = 'Server Created!! Name:' + this.serverName;
  }
  getButtonColor() {
    return this.disable === true ? 'red' : 'green';
  }
  getButtonClass() {
    return this.disable === true ? 'btn btn-danger' : 'btn btn-success';
  }
  onUpdateInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
