import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

serverId: number = 17;
// serverStatus: boolean = false;
serverStatus: string = offline;

  constructor() {
  this.sereverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getColor(){
  return this.serverStatus == 'online' ? 'green' : 'red';
}
}
