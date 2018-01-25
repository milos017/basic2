import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

allowNewServer: boolean = false;
serverCreationStatus: string = "There is no new servers";
serverCreated: boolean = false;
newServerName: string = 'Milos'
servers = ['TestServer', 'TestServer2', 'TestServer3'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

onAddNewServer() {
  this.serverCreationStatus = "New server has been created";
  this.serverCreated = true;
}
onUpdateServerName($event){
this.newServerName = $event.target.value;
}
}
